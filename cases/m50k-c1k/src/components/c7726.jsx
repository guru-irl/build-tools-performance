import React from 'react';
const LABEL_7726 = 'component_7726';
export function Component7726({ value = 7726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7726, 'data-value': derived.doubled }, children);
}
export default Component7726;
