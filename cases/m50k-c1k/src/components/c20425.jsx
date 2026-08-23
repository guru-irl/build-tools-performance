import React from 'react';
const LABEL_20425 = 'component_20425';
export function Component20425({ value = 20425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20425, 'data-value': derived.doubled }, children);
}
export default Component20425;
