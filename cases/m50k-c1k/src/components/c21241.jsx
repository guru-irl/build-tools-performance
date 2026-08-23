import React from 'react';
const LABEL_21241 = 'component_21241';
export function Component21241({ value = 21241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21241, 'data-value': derived.doubled }, children);
}
export default Component21241;
