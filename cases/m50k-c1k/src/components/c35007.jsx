import React from 'react';
const LABEL_35007 = 'component_35007';
export function Component35007({ value = 35007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35007, 'data-value': derived.doubled }, children);
}
export default Component35007;
