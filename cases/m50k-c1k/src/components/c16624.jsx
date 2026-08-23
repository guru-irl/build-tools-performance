import React from 'react';
const LABEL_16624 = 'component_16624';
export function Component16624({ value = 16624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16624, 'data-value': derived.doubled }, children);
}
export default Component16624;
