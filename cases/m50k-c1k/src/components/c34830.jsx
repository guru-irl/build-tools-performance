import React from 'react';
const LABEL_34830 = 'component_34830';
export function Component34830({ value = 34830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34830, 'data-value': derived.doubled }, children);
}
export default Component34830;
