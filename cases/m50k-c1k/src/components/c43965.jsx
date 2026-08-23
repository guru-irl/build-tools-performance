import React from 'react';
const LABEL_43965 = 'component_43965';
export function Component43965({ value = 43965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43965, 'data-value': derived.doubled }, children);
}
export default Component43965;
