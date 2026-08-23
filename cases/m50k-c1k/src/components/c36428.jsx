import React from 'react';
const LABEL_36428 = 'component_36428';
export function Component36428({ value = 36428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36428, 'data-value': derived.doubled }, children);
}
export default Component36428;
