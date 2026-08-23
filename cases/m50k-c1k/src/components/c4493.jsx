import React from 'react';
const LABEL_4493 = 'component_4493';
export function Component4493({ value = 4493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4493, 'data-value': derived.doubled }, children);
}
export default Component4493;
