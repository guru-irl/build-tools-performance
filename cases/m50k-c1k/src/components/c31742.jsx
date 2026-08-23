import React from 'react';
const LABEL_31742 = 'component_31742';
export function Component31742({ value = 31742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31742, 'data-value': derived.doubled }, children);
}
export default Component31742;
