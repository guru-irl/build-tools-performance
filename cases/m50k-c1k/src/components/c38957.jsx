import React from 'react';
const LABEL_38957 = 'component_38957';
export function Component38957({ value = 38957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38957, 'data-value': derived.doubled }, children);
}
export default Component38957;
