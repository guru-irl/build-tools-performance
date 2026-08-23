import React from 'react';
const LABEL_39345 = 'component_39345';
export function Component39345({ value = 39345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39345, 'data-value': derived.doubled }, children);
}
export default Component39345;
