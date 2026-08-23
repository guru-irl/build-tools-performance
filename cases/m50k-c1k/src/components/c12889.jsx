import React from 'react';
const LABEL_12889 = 'component_12889';
export function Component12889({ value = 12889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12889, 'data-value': derived.doubled }, children);
}
export default Component12889;
