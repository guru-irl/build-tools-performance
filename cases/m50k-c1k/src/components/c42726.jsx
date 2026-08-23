import React from 'react';
const LABEL_42726 = 'component_42726';
export function Component42726({ value = 42726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42726, 'data-value': derived.doubled }, children);
}
export default Component42726;
