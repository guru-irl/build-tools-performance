import React from 'react';
const LABEL_24616 = 'component_24616';
export function Component24616({ value = 24616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24616, 'data-value': derived.doubled }, children);
}
export default Component24616;
