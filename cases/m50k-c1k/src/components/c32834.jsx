import React from 'react';
const LABEL_32834 = 'component_32834';
export function Component32834({ value = 32834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32834, 'data-value': derived.doubled }, children);
}
export default Component32834;
