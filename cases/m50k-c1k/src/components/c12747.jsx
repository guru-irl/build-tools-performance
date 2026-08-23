import React from 'react';
const LABEL_12747 = 'component_12747';
export function Component12747({ value = 12747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12747, 'data-value': derived.doubled }, children);
}
export default Component12747;
