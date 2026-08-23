import React from 'react';
const LABEL_2493 = 'component_2493';
export function Component2493({ value = 2493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2493, 'data-value': derived.doubled }, children);
}
export default Component2493;
