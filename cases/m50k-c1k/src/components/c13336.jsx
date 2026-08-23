import React from 'react';
const LABEL_13336 = 'component_13336';
export function Component13336({ value = 13336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13336, 'data-value': derived.doubled }, children);
}
export default Component13336;
