import React from 'react';
const LABEL_12514 = 'component_12514';
export function Component12514({ value = 12514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12514, 'data-value': derived.doubled }, children);
}
export default Component12514;
