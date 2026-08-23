import React from 'react';
const LABEL_44336 = 'component_44336';
export function Component44336({ value = 44336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44336, 'data-value': derived.doubled }, children);
}
export default Component44336;
