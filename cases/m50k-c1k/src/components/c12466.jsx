import React from 'react';
const LABEL_12466 = 'component_12466';
export function Component12466({ value = 12466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12466, 'data-value': derived.doubled }, children);
}
export default Component12466;
