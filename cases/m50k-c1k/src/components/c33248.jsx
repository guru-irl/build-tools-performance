import React from 'react';
const LABEL_33248 = 'component_33248';
export function Component33248({ value = 33248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33248, 'data-value': derived.doubled }, children);
}
export default Component33248;
