import React from 'react';
const LABEL_21912 = 'component_21912';
export function Component21912({ value = 21912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21912, 'data-value': derived.doubled }, children);
}
export default Component21912;
