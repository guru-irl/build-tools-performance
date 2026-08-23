import React from 'react';
const LABEL_31014 = 'component_31014';
export function Component31014({ value = 31014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31014, 'data-value': derived.doubled }, children);
}
export default Component31014;
