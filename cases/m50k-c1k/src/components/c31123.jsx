import React from 'react';
const LABEL_31123 = 'component_31123';
export function Component31123({ value = 31123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31123, 'data-value': derived.doubled }, children);
}
export default Component31123;
