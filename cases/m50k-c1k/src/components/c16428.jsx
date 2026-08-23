import React from 'react';
const LABEL_16428 = 'component_16428';
export function Component16428({ value = 16428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16428, 'data-value': derived.doubled }, children);
}
export default Component16428;
