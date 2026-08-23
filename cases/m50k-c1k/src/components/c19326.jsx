import React from 'react';
const LABEL_19326 = 'component_19326';
export function Component19326({ value = 19326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19326, 'data-value': derived.doubled }, children);
}
export default Component19326;
