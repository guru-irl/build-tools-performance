import React from 'react';
const LABEL_31181 = 'component_31181';
export function Component31181({ value = 31181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31181, 'data-value': derived.doubled }, children);
}
export default Component31181;
