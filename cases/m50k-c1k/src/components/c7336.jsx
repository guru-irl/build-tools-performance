import React from 'react';
const LABEL_7336 = 'component_7336';
export function Component7336({ value = 7336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7336, 'data-value': derived.doubled }, children);
}
export default Component7336;
