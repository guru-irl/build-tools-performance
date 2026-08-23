import React from 'react';
const LABEL_39624 = 'component_39624';
export function Component39624({ value = 39624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39624, 'data-value': derived.doubled }, children);
}
export default Component39624;
