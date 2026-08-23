import React from 'react';
const LABEL_8726 = 'component_8726';
export function Component8726({ value = 8726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8726, 'data-value': derived.doubled }, children);
}
export default Component8726;
