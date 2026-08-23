import React from 'react';
const LABEL_24870 = 'component_24870';
export function Component24870({ value = 24870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24870, 'data-value': derived.doubled }, children);
}
export default Component24870;
