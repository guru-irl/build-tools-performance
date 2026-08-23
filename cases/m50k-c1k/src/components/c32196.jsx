import React from 'react';
const LABEL_32196 = 'component_32196';
export function Component32196({ value = 32196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32196, 'data-value': derived.doubled }, children);
}
export default Component32196;
