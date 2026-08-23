import React from 'react';
const LABEL_38493 = 'component_38493';
export function Component38493({ value = 38493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38493, 'data-value': derived.doubled }, children);
}
export default Component38493;
