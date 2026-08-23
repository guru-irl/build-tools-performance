import React from 'react';
const LABEL_16341 = 'component_16341';
export function Component16341({ value = 16341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16341, 'data-value': derived.doubled }, children);
}
export default Component16341;
