import React from 'react';
const LABEL_24352 = 'component_24352';
export function Component24352({ value = 24352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24352, 'data-value': derived.doubled }, children);
}
export default Component24352;
