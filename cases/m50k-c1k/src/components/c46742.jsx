import React from 'react';
const LABEL_46742 = 'component_46742';
export function Component46742({ value = 46742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46742, 'data-value': derived.doubled }, children);
}
export default Component46742;
