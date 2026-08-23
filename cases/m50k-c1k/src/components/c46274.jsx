import React from 'react';
const LABEL_46274 = 'component_46274';
export function Component46274({ value = 46274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46274, 'data-value': derived.doubled }, children);
}
export default Component46274;
