import React from 'react';
const LABEL_26336 = 'component_26336';
export function Component26336({ value = 26336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26336, 'data-value': derived.doubled }, children);
}
export default Component26336;
