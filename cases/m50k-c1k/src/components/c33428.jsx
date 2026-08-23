import React from 'react';
const LABEL_33428 = 'component_33428';
export function Component33428({ value = 33428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33428, 'data-value': derived.doubled }, children);
}
export default Component33428;
