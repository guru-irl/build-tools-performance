import React from 'react';
const LABEL_12278 = 'component_12278';
export function Component12278({ value = 12278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12278, 'data-value': derived.doubled }, children);
}
export default Component12278;
