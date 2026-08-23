import React from 'react';
const LABEL_38554 = 'component_38554';
export function Component38554({ value = 38554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38554, 'data-value': derived.doubled }, children);
}
export default Component38554;
