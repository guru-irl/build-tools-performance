import React from 'react';
const LABEL_16835 = 'component_16835';
export function Component16835({ value = 16835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16835, 'data-value': derived.doubled }, children);
}
export default Component16835;
