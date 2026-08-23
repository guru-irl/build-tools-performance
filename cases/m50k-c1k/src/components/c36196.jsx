import React from 'react';
const LABEL_36196 = 'component_36196';
export function Component36196({ value = 36196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36196, 'data-value': derived.doubled }, children);
}
export default Component36196;
