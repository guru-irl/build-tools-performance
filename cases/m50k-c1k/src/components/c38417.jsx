import React from 'react';
const LABEL_38417 = 'component_38417';
export function Component38417({ value = 38417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38417, 'data-value': derived.doubled }, children);
}
export default Component38417;
