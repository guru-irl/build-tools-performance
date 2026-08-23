import React from 'react';
const LABEL_24336 = 'component_24336';
export function Component24336({ value = 24336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24336, 'data-value': derived.doubled }, children);
}
export default Component24336;
