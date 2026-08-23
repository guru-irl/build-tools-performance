import React from 'react';
const LABEL_30726 = 'component_30726';
export function Component30726({ value = 30726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30726, 'data-value': derived.doubled }, children);
}
export default Component30726;
