import React from 'react';
const LABEL_20668 = 'component_20668';
export function Component20668({ value = 20668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20668, 'data-value': derived.doubled }, children);
}
export default Component20668;
