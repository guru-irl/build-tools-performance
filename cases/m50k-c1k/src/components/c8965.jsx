import React from 'react';
const LABEL_8965 = 'component_8965';
export function Component8965({ value = 8965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8965, 'data-value': derived.doubled }, children);
}
export default Component8965;
