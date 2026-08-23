import React from 'react';
const LABEL_42485 = 'component_42485';
export function Component42485({ value = 42485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42485, 'data-value': derived.doubled }, children);
}
export default Component42485;
