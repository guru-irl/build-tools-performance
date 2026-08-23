import React from 'react';
const LABEL_18428 = 'component_18428';
export function Component18428({ value = 18428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18428, 'data-value': derived.doubled }, children);
}
export default Component18428;
