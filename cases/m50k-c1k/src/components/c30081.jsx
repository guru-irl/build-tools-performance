import React from 'react';
const LABEL_30081 = 'component_30081';
export function Component30081({ value = 30081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30081, 'data-value': derived.doubled }, children);
}
export default Component30081;
