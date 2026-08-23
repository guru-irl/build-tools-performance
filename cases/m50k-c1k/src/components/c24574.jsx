import React from 'react';
const LABEL_24574 = 'component_24574';
export function Component24574({ value = 24574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24574, 'data-value': derived.doubled }, children);
}
export default Component24574;
