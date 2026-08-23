import React from 'react';
const LABEL_25336 = 'component_25336';
export function Component25336({ value = 25336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25336, 'data-value': derived.doubled }, children);
}
export default Component25336;
