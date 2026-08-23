import React from 'react';
const LABEL_3266 = 'component_3266';
export function Component3266({ value = 3266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3266, 'data-value': derived.doubled }, children);
}
export default Component3266;
