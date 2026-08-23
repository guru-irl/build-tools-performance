import React from 'react';
const LABEL_34252 = 'component_34252';
export function Component34252({ value = 34252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34252, 'data-value': derived.doubled }, children);
}
export default Component34252;
