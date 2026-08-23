import React from 'react';
const LABEL_24600 = 'component_24600';
export function Component24600({ value = 24600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24600, 'data-value': derived.doubled }, children);
}
export default Component24600;
