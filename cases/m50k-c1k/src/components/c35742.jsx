import React from 'react';
const LABEL_35742 = 'component_35742';
export function Component35742({ value = 35742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35742, 'data-value': derived.doubled }, children);
}
export default Component35742;
