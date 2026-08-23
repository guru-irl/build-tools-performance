import React from 'react';
const LABEL_15391 = 'component_15391';
export function Component15391({ value = 15391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15391, 'data-value': derived.doubled }, children);
}
export default Component15391;
