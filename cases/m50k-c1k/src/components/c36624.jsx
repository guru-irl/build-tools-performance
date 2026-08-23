import React from 'react';
const LABEL_36624 = 'component_36624';
export function Component36624({ value = 36624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36624, 'data-value': derived.doubled }, children);
}
export default Component36624;
