import React from 'react';
const LABEL_42413 = 'component_42413';
export function Component42413({ value = 42413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42413, 'data-value': derived.doubled }, children);
}
export default Component42413;
