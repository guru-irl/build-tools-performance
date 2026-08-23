import React from 'react';
const LABEL_24558 = 'component_24558';
export function Component24558({ value = 24558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24558, 'data-value': derived.doubled }, children);
}
export default Component24558;
