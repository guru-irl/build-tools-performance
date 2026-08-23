import React from 'react';
const LABEL_16955 = 'component_16955';
export function Component16955({ value = 16955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16955, 'data-value': derived.doubled }, children);
}
export default Component16955;
