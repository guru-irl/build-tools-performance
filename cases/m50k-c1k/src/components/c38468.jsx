import React from 'react';
const LABEL_38468 = 'component_38468';
export function Component38468({ value = 38468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38468, 'data-value': derived.doubled }, children);
}
export default Component38468;
