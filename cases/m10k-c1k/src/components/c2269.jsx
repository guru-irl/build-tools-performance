import React from 'react';
const LABEL_2269 = 'component_2269';
export function Component2269({ value = 2269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2269, 'data-value': derived.doubled }, children);
}
export default Component2269;
