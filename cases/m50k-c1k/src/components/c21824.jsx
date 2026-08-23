import React from 'react';
const LABEL_21824 = 'component_21824';
export function Component21824({ value = 21824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21824, 'data-value': derived.doubled }, children);
}
export default Component21824;
