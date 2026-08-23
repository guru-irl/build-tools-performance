import React from 'react';
const LABEL_30597 = 'component_30597';
export function Component30597({ value = 30597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30597, 'data-value': derived.doubled }, children);
}
export default Component30597;
