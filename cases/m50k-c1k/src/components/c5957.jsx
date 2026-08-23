import React from 'react';
const LABEL_5957 = 'component_5957';
export function Component5957({ value = 5957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5957, 'data-value': derived.doubled }, children);
}
export default Component5957;
