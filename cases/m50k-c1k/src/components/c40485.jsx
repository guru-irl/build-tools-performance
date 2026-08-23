import React from 'react';
const LABEL_40485 = 'component_40485';
export function Component40485({ value = 40485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40485, 'data-value': derived.doubled }, children);
}
export default Component40485;
