import React from 'react';
const LABEL_8181 = 'component_8181';
export function Component8181({ value = 8181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8181, 'data-value': derived.doubled }, children);
}
export default Component8181;
