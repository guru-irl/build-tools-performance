import React from 'react';
const LABEL_35329 = 'component_35329';
export function Component35329({ value = 35329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35329, 'data-value': derived.doubled }, children);
}
export default Component35329;
