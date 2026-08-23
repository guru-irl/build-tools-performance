import React from 'react';
const LABEL_37965 = 'component_37965';
export function Component37965({ value = 37965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37965, 'data-value': derived.doubled }, children);
}
export default Component37965;
