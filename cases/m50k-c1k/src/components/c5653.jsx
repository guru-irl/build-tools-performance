import React from 'react';
const LABEL_5653 = 'component_5653';
export function Component5653({ value = 5653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5653, 'data-value': derived.doubled }, children);
}
export default Component5653;
