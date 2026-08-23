import React from 'react';
const LABEL_2237 = 'component_2237';
export function Component2237({ value = 2237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2237, 'data-value': derived.doubled }, children);
}
export default Component2237;
