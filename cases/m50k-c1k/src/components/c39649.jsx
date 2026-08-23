import React from 'react';
const LABEL_39649 = 'component_39649';
export function Component39649({ value = 39649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39649, 'data-value': derived.doubled }, children);
}
export default Component39649;
