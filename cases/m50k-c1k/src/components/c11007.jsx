import React from 'react';
const LABEL_11007 = 'component_11007';
export function Component11007({ value = 11007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11007, 'data-value': derived.doubled }, children);
}
export default Component11007;
