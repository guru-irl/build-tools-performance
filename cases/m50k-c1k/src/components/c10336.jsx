import React from 'react';
const LABEL_10336 = 'component_10336';
export function Component10336({ value = 10336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10336, 'data-value': derived.doubled }, children);
}
export default Component10336;
