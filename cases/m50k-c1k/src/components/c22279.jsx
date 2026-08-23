import React from 'react';
const LABEL_22279 = 'component_22279';
export function Component22279({ value = 22279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22279, 'data-value': derived.doubled }, children);
}
export default Component22279;
