import React from 'react';
const LABEL_34726 = 'component_34726';
export function Component34726({ value = 34726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34726, 'data-value': derived.doubled }, children);
}
export default Component34726;
