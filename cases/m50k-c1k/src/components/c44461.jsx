import React from 'react';
const LABEL_44461 = 'component_44461';
export function Component44461({ value = 44461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44461, 'data-value': derived.doubled }, children);
}
export default Component44461;
