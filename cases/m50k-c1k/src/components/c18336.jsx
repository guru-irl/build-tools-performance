import React from 'react';
const LABEL_18336 = 'component_18336';
export function Component18336({ value = 18336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18336, 'data-value': derived.doubled }, children);
}
export default Component18336;
