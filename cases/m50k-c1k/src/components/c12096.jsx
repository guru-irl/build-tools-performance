import React from 'react';
const LABEL_12096 = 'component_12096';
export function Component12096({ value = 12096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12096, 'data-value': derived.doubled }, children);
}
export default Component12096;
