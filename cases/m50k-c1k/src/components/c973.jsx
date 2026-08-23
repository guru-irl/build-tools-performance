import React from 'react';
const LABEL_973 = 'component_973';
export function Component973({ value = 973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_973, 'data-value': derived.doubled }, children);
}
export default Component973;
