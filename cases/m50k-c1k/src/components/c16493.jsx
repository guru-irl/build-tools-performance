import React from 'react';
const LABEL_16493 = 'component_16493';
export function Component16493({ value = 16493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16493, 'data-value': derived.doubled }, children);
}
export default Component16493;
