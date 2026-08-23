import React from 'react';
const LABEL_25496 = 'component_25496';
export function Component25496({ value = 25496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25496, 'data-value': derived.doubled }, children);
}
export default Component25496;
