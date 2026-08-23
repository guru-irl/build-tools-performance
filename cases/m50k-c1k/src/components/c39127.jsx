import React from 'react';
const LABEL_39127 = 'component_39127';
export function Component39127({ value = 39127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39127, 'data-value': derived.doubled }, children);
}
export default Component39127;
