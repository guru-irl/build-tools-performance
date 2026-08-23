import React from 'react';
const LABEL_32428 = 'component_32428';
export function Component32428({ value = 32428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32428, 'data-value': derived.doubled }, children);
}
export default Component32428;
