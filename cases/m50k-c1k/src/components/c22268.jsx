import React from 'react';
const LABEL_22268 = 'component_22268';
export function Component22268({ value = 22268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22268, 'data-value': derived.doubled }, children);
}
export default Component22268;
