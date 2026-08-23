import React from 'react';
const LABEL_8326 = 'component_8326';
export function Component8326({ value = 8326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8326, 'data-value': derived.doubled }, children);
}
export default Component8326;
