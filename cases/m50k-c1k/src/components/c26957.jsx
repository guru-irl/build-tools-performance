import React from 'react';
const LABEL_26957 = 'component_26957';
export function Component26957({ value = 26957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26957, 'data-value': derived.doubled }, children);
}
export default Component26957;
