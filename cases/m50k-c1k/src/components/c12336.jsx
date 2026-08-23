import React from 'react';
const LABEL_12336 = 'component_12336';
export function Component12336({ value = 12336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12336, 'data-value': derived.doubled }, children);
}
export default Component12336;
