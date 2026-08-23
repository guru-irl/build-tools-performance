import React from 'react';
const LABEL_12050 = 'component_12050';
export function Component12050({ value = 12050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12050, 'data-value': derived.doubled }, children);
}
export default Component12050;
