import React from 'react';
const LABEL_29233 = 'component_29233';
export function Component29233({ value = 29233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29233, 'data-value': derived.doubled }, children);
}
export default Component29233;
