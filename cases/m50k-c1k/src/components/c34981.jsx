import React from 'react';
const LABEL_34981 = 'component_34981';
export function Component34981({ value = 34981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34981, 'data-value': derived.doubled }, children);
}
export default Component34981;
