import React from 'react';
const LABEL_650 = 'component_650';
export function Component650({ value = 650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_650, 'data-value': derived.doubled }, children);
}
export default Component650;
