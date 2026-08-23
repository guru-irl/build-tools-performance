import React from 'react';
const LABEL_16742 = 'component_16742';
export function Component16742({ value = 16742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16742, 'data-value': derived.doubled }, children);
}
export default Component16742;
