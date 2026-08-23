import React from 'react';
const LABEL_31965 = 'component_31965';
export function Component31965({ value = 31965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31965, 'data-value': derived.doubled }, children);
}
export default Component31965;
