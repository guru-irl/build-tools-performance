import React from 'react';
const LABEL_16127 = 'component_16127';
export function Component16127({ value = 16127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16127, 'data-value': derived.doubled }, children);
}
export default Component16127;
