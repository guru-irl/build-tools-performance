import React from 'react';
const LABEL_15428 = 'component_15428';
export function Component15428({ value = 15428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15428, 'data-value': derived.doubled }, children);
}
export default Component15428;
