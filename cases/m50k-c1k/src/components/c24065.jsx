import React from 'react';
const LABEL_24065 = 'component_24065';
export function Component24065({ value = 24065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24065, 'data-value': derived.doubled }, children);
}
export default Component24065;
