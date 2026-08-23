import React from 'react';
const LABEL_28957 = 'component_28957';
export function Component28957({ value = 28957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28957, 'data-value': derived.doubled }, children);
}
export default Component28957;
