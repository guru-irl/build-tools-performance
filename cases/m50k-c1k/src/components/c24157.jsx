import React from 'react';
const LABEL_24157 = 'component_24157';
export function Component24157({ value = 24157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24157, 'data-value': derived.doubled }, children);
}
export default Component24157;
