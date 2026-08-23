import React from 'react';
const LABEL_10311 = 'component_10311';
export function Component10311({ value = 10311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10311, 'data-value': derived.doubled }, children);
}
export default Component10311;
