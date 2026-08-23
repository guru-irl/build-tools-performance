import React from 'react';
const LABEL_12913 = 'component_12913';
export function Component12913({ value = 12913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12913, 'data-value': derived.doubled }, children);
}
export default Component12913;
