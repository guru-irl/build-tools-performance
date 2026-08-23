import React from 'react';
const LABEL_34333 = 'component_34333';
export function Component34333({ value = 34333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34333, 'data-value': derived.doubled }, children);
}
export default Component34333;
