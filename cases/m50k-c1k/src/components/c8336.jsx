import React from 'react';
const LABEL_8336 = 'component_8336';
export function Component8336({ value = 8336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8336, 'data-value': derived.doubled }, children);
}
export default Component8336;
