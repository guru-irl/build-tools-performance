import React from 'react';
const LABEL_21768 = 'component_21768';
export function Component21768({ value = 21768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21768, 'data-value': derived.doubled }, children);
}
export default Component21768;
