import React from 'react';
const LABEL_29742 = 'component_29742';
export function Component29742({ value = 29742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29742, 'data-value': derived.doubled }, children);
}
export default Component29742;
