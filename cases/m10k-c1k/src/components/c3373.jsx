import React from 'react';
const LABEL_3373 = 'component_3373';
export function Component3373({ value = 3373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3373, 'data-value': derived.doubled }, children);
}
export default Component3373;
