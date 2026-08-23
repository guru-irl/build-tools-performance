import React from 'react';
const LABEL_24440 = 'component_24440';
export function Component24440({ value = 24440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24440, 'data-value': derived.doubled }, children);
}
export default Component24440;
