import React from 'react';
const LABEL_31034 = 'component_31034';
export function Component31034({ value = 31034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31034, 'data-value': derived.doubled }, children);
}
export default Component31034;
