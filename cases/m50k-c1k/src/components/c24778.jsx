import React from 'react';
const LABEL_24778 = 'component_24778';
export function Component24778({ value = 24778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24778, 'data-value': derived.doubled }, children);
}
export default Component24778;
