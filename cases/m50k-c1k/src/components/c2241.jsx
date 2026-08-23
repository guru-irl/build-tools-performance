import React from 'react';
const LABEL_2241 = 'component_2241';
export function Component2241({ value = 2241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2241, 'data-value': derived.doubled }, children);
}
export default Component2241;
