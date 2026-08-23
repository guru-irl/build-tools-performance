import React from 'react';
const LABEL_18534 = 'component_18534';
export function Component18534({ value = 18534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18534, 'data-value': derived.doubled }, children);
}
export default Component18534;
