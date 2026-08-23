import React from 'react';
const LABEL_26127 = 'component_26127';
export function Component26127({ value = 26127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26127, 'data-value': derived.doubled }, children);
}
export default Component26127;
