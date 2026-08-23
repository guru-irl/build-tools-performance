import React from 'react';
const LABEL_11710 = 'component_11710';
export function Component11710({ value = 11710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11710, 'data-value': derived.doubled }, children);
}
export default Component11710;
