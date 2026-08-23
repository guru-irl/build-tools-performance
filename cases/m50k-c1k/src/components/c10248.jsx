import React from 'react';
const LABEL_10248 = 'component_10248';
export function Component10248({ value = 10248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10248, 'data-value': derived.doubled }, children);
}
export default Component10248;
