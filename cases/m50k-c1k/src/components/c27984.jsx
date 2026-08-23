import React from 'react';
const LABEL_27984 = 'component_27984';
export function Component27984({ value = 27984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27984, 'data-value': derived.doubled }, children);
}
export default Component27984;
