import React from 'react';
const LABEL_25170 = 'component_25170';
export function Component25170({ value = 25170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25170, 'data-value': derived.doubled }, children);
}
export default Component25170;
