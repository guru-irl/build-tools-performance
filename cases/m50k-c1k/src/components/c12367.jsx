import React from 'react';
const LABEL_12367 = 'component_12367';
export function Component12367({ value = 12367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12367, 'data-value': derived.doubled }, children);
}
export default Component12367;
