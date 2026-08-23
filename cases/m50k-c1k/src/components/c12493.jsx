import React from 'react';
const LABEL_12493 = 'component_12493';
export function Component12493({ value = 12493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12493, 'data-value': derived.doubled }, children);
}
export default Component12493;
