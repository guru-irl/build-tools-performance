import React from 'react';
const LABEL_35335 = 'component_35335';
export function Component35335({ value = 35335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35335, 'data-value': derived.doubled }, children);
}
export default Component35335;
