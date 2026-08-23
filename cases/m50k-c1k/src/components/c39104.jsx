import React from 'react';
const LABEL_39104 = 'component_39104';
export function Component39104({ value = 39104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39104, 'data-value': derived.doubled }, children);
}
export default Component39104;
