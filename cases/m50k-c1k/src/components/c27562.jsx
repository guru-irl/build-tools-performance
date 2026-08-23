import React from 'react';
const LABEL_27562 = 'component_27562';
export function Component27562({ value = 27562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27562, 'data-value': derived.doubled }, children);
}
export default Component27562;
