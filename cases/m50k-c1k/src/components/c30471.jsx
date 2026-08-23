import React from 'react';
const LABEL_30471 = 'component_30471';
export function Component30471({ value = 30471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30471, 'data-value': derived.doubled }, children);
}
export default Component30471;
