import React from 'react';
const LABEL_32262 = 'component_32262';
export function Component32262({ value = 32262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32262, 'data-value': derived.doubled }, children);
}
export default Component32262;
