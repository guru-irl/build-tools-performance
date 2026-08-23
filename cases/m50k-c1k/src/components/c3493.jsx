import React from 'react';
const LABEL_3493 = 'component_3493';
export function Component3493({ value = 3493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3493, 'data-value': derived.doubled }, children);
}
export default Component3493;
