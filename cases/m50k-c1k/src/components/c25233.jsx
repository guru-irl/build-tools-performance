import React from 'react';
const LABEL_25233 = 'component_25233';
export function Component25233({ value = 25233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25233, 'data-value': derived.doubled }, children);
}
export default Component25233;
