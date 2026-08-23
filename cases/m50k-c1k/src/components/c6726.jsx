import React from 'react';
const LABEL_6726 = 'component_6726';
export function Component6726({ value = 6726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6726, 'data-value': derived.doubled }, children);
}
export default Component6726;
