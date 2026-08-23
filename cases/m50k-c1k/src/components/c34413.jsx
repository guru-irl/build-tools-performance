import React from 'react';
const LABEL_34413 = 'component_34413';
export function Component34413({ value = 34413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34413, 'data-value': derived.doubled }, children);
}
export default Component34413;
