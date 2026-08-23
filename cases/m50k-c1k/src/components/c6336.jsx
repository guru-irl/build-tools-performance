import React from 'react';
const LABEL_6336 = 'component_6336';
export function Component6336({ value = 6336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6336, 'data-value': derived.doubled }, children);
}
export default Component6336;
