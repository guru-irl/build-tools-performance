import React from 'react';
const LABEL_39398 = 'component_39398';
export function Component39398({ value = 39398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39398, 'data-value': derived.doubled }, children);
}
export default Component39398;
