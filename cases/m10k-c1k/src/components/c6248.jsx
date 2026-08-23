import React from 'react';
const LABEL_6248 = 'component_6248';
export function Component6248({ value = 6248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6248, 'data-value': derived.doubled }, children);
}
export default Component6248;
