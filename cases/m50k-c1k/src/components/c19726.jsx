import React from 'react';
const LABEL_19726 = 'component_19726';
export function Component19726({ value = 19726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19726, 'data-value': derived.doubled }, children);
}
export default Component19726;
