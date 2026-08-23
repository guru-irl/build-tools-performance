import React from 'react';
const LABEL_18553 = 'component_18553';
export function Component18553({ value = 18553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18553, 'data-value': derived.doubled }, children);
}
export default Component18553;
