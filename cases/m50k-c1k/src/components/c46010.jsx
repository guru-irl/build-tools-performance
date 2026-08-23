import React from 'react';
const LABEL_46010 = 'component_46010';
export function Component46010({ value = 46010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46010, 'data-value': derived.doubled }, children);
}
export default Component46010;
