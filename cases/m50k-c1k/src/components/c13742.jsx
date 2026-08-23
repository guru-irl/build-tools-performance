import React from 'react';
const LABEL_13742 = 'component_13742';
export function Component13742({ value = 13742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13742, 'data-value': derived.doubled }, children);
}
export default Component13742;
