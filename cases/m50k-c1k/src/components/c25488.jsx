import React from 'react';
const LABEL_25488 = 'component_25488';
export function Component25488({ value = 25488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25488, 'data-value': derived.doubled }, children);
}
export default Component25488;
