import React from 'react';
const LABEL_14428 = 'component_14428';
export function Component14428({ value = 14428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14428, 'data-value': derived.doubled }, children);
}
export default Component14428;
