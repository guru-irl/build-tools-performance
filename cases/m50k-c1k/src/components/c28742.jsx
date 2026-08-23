import React from 'react';
const LABEL_28742 = 'component_28742';
export function Component28742({ value = 28742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28742, 'data-value': derived.doubled }, children);
}
export default Component28742;
