import React from 'react';
const LABEL_31840 = 'component_31840';
export function Component31840({ value = 31840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31840, 'data-value': derived.doubled }, children);
}
export default Component31840;
