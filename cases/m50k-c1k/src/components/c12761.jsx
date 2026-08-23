import React from 'react';
const LABEL_12761 = 'component_12761';
export function Component12761({ value = 12761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12761, 'data-value': derived.doubled }, children);
}
export default Component12761;
