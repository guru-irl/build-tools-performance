import React from 'react';
const LABEL_21566 = 'component_21566';
export function Component21566({ value = 21566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21566, 'data-value': derived.doubled }, children);
}
export default Component21566;
