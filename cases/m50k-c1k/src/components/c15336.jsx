import React from 'react';
const LABEL_15336 = 'component_15336';
export function Component15336({ value = 15336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15336, 'data-value': derived.doubled }, children);
}
export default Component15336;
