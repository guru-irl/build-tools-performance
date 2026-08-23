import React from 'react';
const LABEL_22336 = 'component_22336';
export function Component22336({ value = 22336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22336, 'data-value': derived.doubled }, children);
}
export default Component22336;
