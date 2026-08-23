import React from 'react';
const LABEL_34248 = 'component_34248';
export function Component34248({ value = 34248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34248, 'data-value': derived.doubled }, children);
}
export default Component34248;
