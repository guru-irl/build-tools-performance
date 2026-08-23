import React from 'react';
const LABEL_12988 = 'component_12988';
export function Component12988({ value = 12988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12988, 'data-value': derived.doubled }, children);
}
export default Component12988;
