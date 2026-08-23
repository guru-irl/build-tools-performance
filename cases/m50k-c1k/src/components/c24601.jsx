import React from 'react';
const LABEL_24601 = 'component_24601';
export function Component24601({ value = 24601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24601, 'data-value': derived.doubled }, children);
}
export default Component24601;
