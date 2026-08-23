import React from 'react';
const LABEL_25484 = 'component_25484';
export function Component25484({ value = 25484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25484, 'data-value': derived.doubled }, children);
}
export default Component25484;
