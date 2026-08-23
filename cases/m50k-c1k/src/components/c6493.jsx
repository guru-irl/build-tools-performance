import React from 'react';
const LABEL_6493 = 'component_6493';
export function Component6493({ value = 6493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6493, 'data-value': derived.doubled }, children);
}
export default Component6493;
