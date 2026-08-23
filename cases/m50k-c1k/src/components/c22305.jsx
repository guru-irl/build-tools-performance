import React from 'react';
const LABEL_22305 = 'component_22305';
export function Component22305({ value = 22305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22305, 'data-value': derived.doubled }, children);
}
export default Component22305;
