import React from 'react';
const LABEL_12429 = 'component_12429';
export function Component12429({ value = 12429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12429, 'data-value': derived.doubled }, children);
}
export default Component12429;
