import React from 'react';
const LABEL_12771 = 'component_12771';
export function Component12771({ value = 12771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12771, 'data-value': derived.doubled }, children);
}
export default Component12771;
