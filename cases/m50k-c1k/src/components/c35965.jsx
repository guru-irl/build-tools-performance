import React from 'react';
const LABEL_35965 = 'component_35965';
export function Component35965({ value = 35965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35965, 'data-value': derived.doubled }, children);
}
export default Component35965;
