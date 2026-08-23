import React from 'react';
const LABEL_10742 = 'component_10742';
export function Component10742({ value = 10742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10742, 'data-value': derived.doubled }, children);
}
export default Component10742;
