import React from 'react';
const LABEL_3600 = 'component_3600';
export function Component3600({ value = 3600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3600, 'data-value': derived.doubled }, children);
}
export default Component3600;
