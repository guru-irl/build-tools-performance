import React from 'react';
const LABEL_38649 = 'component_38649';
export function Component38649({ value = 38649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38649, 'data-value': derived.doubled }, children);
}
export default Component38649;
