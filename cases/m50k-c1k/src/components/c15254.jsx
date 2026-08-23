import React from 'react';
const LABEL_15254 = 'component_15254';
export function Component15254({ value = 15254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15254, 'data-value': derived.doubled }, children);
}
export default Component15254;
