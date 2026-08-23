import React from 'react';
const LABEL_29196 = 'component_29196';
export function Component29196({ value = 29196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29196, 'data-value': derived.doubled }, children);
}
export default Component29196;
