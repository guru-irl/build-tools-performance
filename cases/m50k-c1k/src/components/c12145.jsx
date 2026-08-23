import React from 'react';
const LABEL_12145 = 'component_12145';
export function Component12145({ value = 12145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12145, 'data-value': derived.doubled }, children);
}
export default Component12145;
