import React from 'react';
const LABEL_2835 = 'component_2835';
export function Component2835({ value = 2835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2835, 'data-value': derived.doubled }, children);
}
export default Component2835;
