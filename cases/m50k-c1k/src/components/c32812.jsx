import React from 'react';
const LABEL_32812 = 'component_32812';
export function Component32812({ value = 32812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32812, 'data-value': derived.doubled }, children);
}
export default Component32812;
