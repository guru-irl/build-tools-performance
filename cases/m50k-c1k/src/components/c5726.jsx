import React from 'react';
const LABEL_5726 = 'component_5726';
export function Component5726({ value = 5726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5726, 'data-value': derived.doubled }, children);
}
export default Component5726;
