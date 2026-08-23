import React from 'react';
const LABEL_29248 = 'component_29248';
export function Component29248({ value = 29248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29248, 'data-value': derived.doubled }, children);
}
export default Component29248;
