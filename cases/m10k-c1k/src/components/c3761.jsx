import React from 'react';
const LABEL_3761 = 'component_3761';
export function Component3761({ value = 3761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3761, 'data-value': derived.doubled }, children);
}
export default Component3761;
