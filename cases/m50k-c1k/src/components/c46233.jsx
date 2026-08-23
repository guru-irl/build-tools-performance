import React from 'react';
const LABEL_46233 = 'component_46233';
export function Component46233({ value = 46233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46233, 'data-value': derived.doubled }, children);
}
export default Component46233;
