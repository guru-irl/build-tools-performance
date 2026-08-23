import React from 'react';
const LABEL_31600 = 'component_31600';
export function Component31600({ value = 31600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31600, 'data-value': derived.doubled }, children);
}
export default Component31600;
