import React from 'react';
const LABEL_39611 = 'component_39611';
export function Component39611({ value = 39611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39611, 'data-value': derived.doubled }, children);
}
export default Component39611;
