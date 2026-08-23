import React from 'react';
const LABEL_2040 = 'component_2040';
export function Component2040({ value = 2040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2040, 'data-value': derived.doubled }, children);
}
export default Component2040;
