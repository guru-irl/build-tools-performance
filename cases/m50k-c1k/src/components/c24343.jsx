import React from 'react';
const LABEL_24343 = 'component_24343';
export function Component24343({ value = 24343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24343, 'data-value': derived.doubled }, children);
}
export default Component24343;
