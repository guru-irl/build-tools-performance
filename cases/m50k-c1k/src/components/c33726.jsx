import React from 'react';
const LABEL_33726 = 'component_33726';
export function Component33726({ value = 33726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33726, 'data-value': derived.doubled }, children);
}
export default Component33726;
