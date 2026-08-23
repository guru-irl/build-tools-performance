import React from 'react';
const LABEL_36181 = 'component_36181';
export function Component36181({ value = 36181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36181, 'data-value': derived.doubled }, children);
}
export default Component36181;
