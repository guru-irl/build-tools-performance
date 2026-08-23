import React from 'react';
const LABEL_27441 = 'component_27441';
export function Component27441({ value = 27441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27441, 'data-value': derived.doubled }, children);
}
export default Component27441;
