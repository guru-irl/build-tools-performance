import React from 'react';
const LABEL_18965 = 'component_18965';
export function Component18965({ value = 18965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18965, 'data-value': derived.doubled }, children);
}
export default Component18965;
