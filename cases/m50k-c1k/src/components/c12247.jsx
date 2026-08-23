import React from 'react';
const LABEL_12247 = 'component_12247';
export function Component12247({ value = 12247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12247, 'data-value': derived.doubled }, children);
}
export default Component12247;
