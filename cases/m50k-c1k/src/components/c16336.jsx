import React from 'react';
const LABEL_16336 = 'component_16336';
export function Component16336({ value = 16336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16336, 'data-value': derived.doubled }, children);
}
export default Component16336;
