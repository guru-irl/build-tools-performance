import React from 'react';
const LABEL_21367 = 'component_21367';
export function Component21367({ value = 21367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21367, 'data-value': derived.doubled }, children);
}
export default Component21367;
