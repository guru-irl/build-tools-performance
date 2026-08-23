import React from 'react';
const LABEL_2514 = 'component_2514';
export function Component2514({ value = 2514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2514, 'data-value': derived.doubled }, children);
}
export default Component2514;
