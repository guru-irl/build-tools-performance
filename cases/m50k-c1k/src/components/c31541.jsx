import React from 'react';
const LABEL_31541 = 'component_31541';
export function Component31541({ value = 31541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31541, 'data-value': derived.doubled }, children);
}
export default Component31541;
