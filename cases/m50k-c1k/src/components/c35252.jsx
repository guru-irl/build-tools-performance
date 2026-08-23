import React from 'react';
const LABEL_35252 = 'component_35252';
export function Component35252({ value = 35252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35252, 'data-value': derived.doubled }, children);
}
export default Component35252;
