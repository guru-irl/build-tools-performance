import React from 'react';
const LABEL_2372 = 'component_2372';
export function Component2372({ value = 2372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2372, 'data-value': derived.doubled }, children);
}
export default Component2372;
