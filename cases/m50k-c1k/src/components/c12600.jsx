import React from 'react';
const LABEL_12600 = 'component_12600';
export function Component12600({ value = 12600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12600, 'data-value': derived.doubled }, children);
}
export default Component12600;
