import React from 'react';
const LABEL_34957 = 'component_34957';
export function Component34957({ value = 34957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34957, 'data-value': derived.doubled }, children);
}
export default Component34957;
