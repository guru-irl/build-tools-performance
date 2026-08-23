import React from 'react';
const LABEL_34765 = 'component_34765';
export function Component34765({ value = 34765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34765, 'data-value': derived.doubled }, children);
}
export default Component34765;
