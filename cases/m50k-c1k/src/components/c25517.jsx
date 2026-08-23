import React from 'react';
const LABEL_25517 = 'component_25517';
export function Component25517({ value = 25517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25517, 'data-value': derived.doubled }, children);
}
export default Component25517;
