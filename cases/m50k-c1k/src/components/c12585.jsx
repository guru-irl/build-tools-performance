import React from 'react';
const LABEL_12585 = 'component_12585';
export function Component12585({ value = 12585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12585, 'data-value': derived.doubled }, children);
}
export default Component12585;
