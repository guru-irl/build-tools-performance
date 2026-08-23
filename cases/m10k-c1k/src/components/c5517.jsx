import React from 'react';
const LABEL_5517 = 'component_5517';
export function Component5517({ value = 5517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5517, 'data-value': derived.doubled }, children);
}
export default Component5517;
