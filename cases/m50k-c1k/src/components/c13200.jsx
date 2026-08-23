import React from 'react';
const LABEL_13200 = 'component_13200';
export function Component13200({ value = 13200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13200, 'data-value': derived.doubled }, children);
}
export default Component13200;
