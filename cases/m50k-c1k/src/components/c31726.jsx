import React from 'react';
const LABEL_31726 = 'component_31726';
export function Component31726({ value = 31726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31726, 'data-value': derived.doubled }, children);
}
export default Component31726;
