import React from 'react';
const LABEL_37034 = 'component_37034';
export function Component37034({ value = 37034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37034, 'data-value': derived.doubled }, children);
}
export default Component37034;
