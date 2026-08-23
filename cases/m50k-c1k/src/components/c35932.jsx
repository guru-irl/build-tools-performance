import React from 'react';
const LABEL_35932 = 'component_35932';
export function Component35932({ value = 35932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35932, 'data-value': derived.doubled }, children);
}
export default Component35932;
