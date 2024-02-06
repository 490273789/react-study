import { useRef } from 'react';
import Button from '@/components/Button';
import Calendar, { CalendarRef } from '@/components/Calendar';
export default function UIComponent() {
  const calendarRef = useRef<CalendarRef>(null);
  const handleCalendarChange = (date: Date) => {
    console.log(date);
  };

  const getDate = () => {
    console.log(calendarRef.current?.getDate());
  };
  const setDate = () => {
    calendarRef.current?.setDate(new Date('2024/02/08'));
  };
  return (
    <div>
      <Calendar
        ref={calendarRef}
        value={new Date()}
        onChange={handleCalendarChange}
      />

      <Button onClick={getDate}>获取时间</Button>
      <Button onClick={setDate}>设置时间</Button>
    </div>
  );
}
