import React from 'react';
const LABEL_16726 = 'component_16726';
export function Component16726({ value = 16726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16726, 'data-value': derived.doubled }, children);
}
export default Component16726;
