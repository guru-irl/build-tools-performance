import React from 'react';
const LABEL_35896 = 'component_35896';
export function Component35896({ value = 35896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35896, 'data-value': derived.doubled }, children);
}
export default Component35896;
