import React from 'react';
const LABEL_5248 = 'component_5248';
export function Component5248({ value = 5248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5248, 'data-value': derived.doubled }, children);
}
export default Component5248;
