import React from 'react';
const LABEL_12737 = 'component_12737';
export function Component12737({ value = 12737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12737, 'data-value': derived.doubled }, children);
}
export default Component12737;
