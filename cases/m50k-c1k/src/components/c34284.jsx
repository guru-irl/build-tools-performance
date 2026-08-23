import React from 'react';
const LABEL_34284 = 'component_34284';
export function Component34284({ value = 34284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34284, 'data-value': derived.doubled }, children);
}
export default Component34284;
