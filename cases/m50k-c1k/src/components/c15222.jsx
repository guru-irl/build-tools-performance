import React from 'react';
const LABEL_15222 = 'component_15222';
export function Component15222({ value = 15222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15222, 'data-value': derived.doubled }, children);
}
export default Component15222;
