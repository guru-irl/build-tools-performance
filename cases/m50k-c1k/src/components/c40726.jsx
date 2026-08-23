import React from 'react';
const LABEL_40726 = 'component_40726';
export function Component40726({ value = 40726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40726, 'data-value': derived.doubled }, children);
}
export default Component40726;
