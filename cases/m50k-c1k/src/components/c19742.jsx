import React from 'react';
const LABEL_19742 = 'component_19742';
export function Component19742({ value = 19742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19742, 'data-value': derived.doubled }, children);
}
export default Component19742;
