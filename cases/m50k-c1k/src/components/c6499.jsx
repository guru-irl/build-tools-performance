import React from 'react';
const LABEL_6499 = 'component_6499';
export function Component6499({ value = 6499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6499, 'data-value': derived.doubled }, children);
}
export default Component6499;
