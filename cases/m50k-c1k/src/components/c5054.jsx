import React from 'react';
const LABEL_5054 = 'component_5054';
export function Component5054({ value = 5054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5054, 'data-value': derived.doubled }, children);
}
export default Component5054;
