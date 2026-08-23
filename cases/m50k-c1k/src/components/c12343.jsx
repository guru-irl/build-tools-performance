import React from 'react';
const LABEL_12343 = 'component_12343';
export function Component12343({ value = 12343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12343, 'data-value': derived.doubled }, children);
}
export default Component12343;
