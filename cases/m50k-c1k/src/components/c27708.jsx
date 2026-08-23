import React from 'react';
const LABEL_27708 = 'component_27708';
export function Component27708({ value = 27708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27708, 'data-value': derived.doubled }, children);
}
export default Component27708;
