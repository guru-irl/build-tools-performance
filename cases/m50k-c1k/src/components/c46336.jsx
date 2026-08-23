import React from 'react';
const LABEL_46336 = 'component_46336';
export function Component46336({ value = 46336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46336, 'data-value': derived.doubled }, children);
}
export default Component46336;
