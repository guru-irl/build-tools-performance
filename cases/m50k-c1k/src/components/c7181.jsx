import React from 'react';
const LABEL_7181 = 'component_7181';
export function Component7181({ value = 7181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7181, 'data-value': derived.doubled }, children);
}
export default Component7181;
