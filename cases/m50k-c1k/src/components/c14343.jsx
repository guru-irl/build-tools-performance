import React from 'react';
const LABEL_14343 = 'component_14343';
export function Component14343({ value = 14343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14343, 'data-value': derived.doubled }, children);
}
export default Component14343;
