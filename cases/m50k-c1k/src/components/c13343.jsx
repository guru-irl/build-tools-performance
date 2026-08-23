import React from 'react';
const LABEL_13343 = 'component_13343';
export function Component13343({ value = 13343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13343, 'data-value': derived.doubled }, children);
}
export default Component13343;
