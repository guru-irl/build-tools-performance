import React from 'react';
const LABEL_24493 = 'component_24493';
export function Component24493({ value = 24493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24493, 'data-value': derived.doubled }, children);
}
export default Component24493;
