import React from 'react';
const LABEL_44965 = 'component_44965';
export function Component44965({ value = 44965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44965, 'data-value': derived.doubled }, children);
}
export default Component44965;
