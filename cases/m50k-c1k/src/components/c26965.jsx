import React from 'react';
const LABEL_26965 = 'component_26965';
export function Component26965({ value = 26965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26965, 'data-value': derived.doubled }, children);
}
export default Component26965;
