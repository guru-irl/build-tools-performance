import React from 'react';
const LABEL_44624 = 'component_44624';
export function Component44624({ value = 44624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44624, 'data-value': derived.doubled }, children);
}
export default Component44624;
