import React from 'react';
const LABEL_25020 = 'component_25020';
export function Component25020({ value = 25020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25020, 'data-value': derived.doubled }, children);
}
export default Component25020;
