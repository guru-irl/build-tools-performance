import React from 'react';
const LABEL_38336 = 'component_38336';
export function Component38336({ value = 38336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38336, 'data-value': derived.doubled }, children);
}
export default Component38336;
