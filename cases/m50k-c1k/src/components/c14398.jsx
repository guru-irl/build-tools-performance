import React from 'react';
const LABEL_14398 = 'component_14398';
export function Component14398({ value = 14398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14398, 'data-value': derived.doubled }, children);
}
export default Component14398;
