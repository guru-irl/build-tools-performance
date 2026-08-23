import React from 'react';
const LABEL_18742 = 'component_18742';
export function Component18742({ value = 18742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18742, 'data-value': derived.doubled }, children);
}
export default Component18742;
