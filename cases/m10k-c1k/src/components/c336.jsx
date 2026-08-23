import React from 'react';
const LABEL_336 = 'component_336';
export function Component336({ value = 336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_336, 'data-value': derived.doubled }, children);
}
export default Component336;
