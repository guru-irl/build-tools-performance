import React from 'react';
const LABEL_23023 = 'component_23023';
export function Component23023({ value = 23023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23023, 'data-value': derived.doubled }, children);
}
export default Component23023;
