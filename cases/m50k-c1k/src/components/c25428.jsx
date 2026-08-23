import React from 'react';
const LABEL_25428 = 'component_25428';
export function Component25428({ value = 25428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25428, 'data-value': derived.doubled }, children);
}
export default Component25428;
