import React from 'react';
const LABEL_39920 = 'component_39920';
export function Component39920({ value = 39920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39920, 'data-value': derived.doubled }, children);
}
export default Component39920;
