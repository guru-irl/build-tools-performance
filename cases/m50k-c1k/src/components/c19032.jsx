import React from 'react';
const LABEL_19032 = 'component_19032';
export function Component19032({ value = 19032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19032, 'data-value': derived.doubled }, children);
}
export default Component19032;
