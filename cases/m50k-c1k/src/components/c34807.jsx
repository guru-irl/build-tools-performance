import React from 'react';
const LABEL_34807 = 'component_34807';
export function Component34807({ value = 34807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34807, 'data-value': derived.doubled }, children);
}
export default Component34807;
