import React from 'react';
const LABEL_32870 = 'component_32870';
export function Component32870({ value = 32870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32870, 'data-value': derived.doubled }, children);
}
export default Component32870;
