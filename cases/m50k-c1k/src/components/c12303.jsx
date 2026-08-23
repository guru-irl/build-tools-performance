import React from 'react';
const LABEL_12303 = 'component_12303';
export function Component12303({ value = 12303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12303, 'data-value': derived.doubled }, children);
}
export default Component12303;
