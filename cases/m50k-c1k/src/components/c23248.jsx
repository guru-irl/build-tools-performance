import React from 'react';
const LABEL_23248 = 'component_23248';
export function Component23248({ value = 23248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23248, 'data-value': derived.doubled }, children);
}
export default Component23248;
