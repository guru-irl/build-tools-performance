import React from 'react';
const LABEL_35953 = 'component_35953';
export function Component35953({ value = 35953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35953, 'data-value': derived.doubled }, children);
}
export default Component35953;
