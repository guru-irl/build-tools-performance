import React from 'react';
const LABEL_278 = 'component_278';
export function Component278({ value = 278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_278, 'data-value': derived.doubled }, children);
}
export default Component278;
