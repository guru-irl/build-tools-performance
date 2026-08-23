import React from 'react';
const LABEL_33181 = 'component_33181';
export function Component33181({ value = 33181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33181, 'data-value': derived.doubled }, children);
}
export default Component33181;
