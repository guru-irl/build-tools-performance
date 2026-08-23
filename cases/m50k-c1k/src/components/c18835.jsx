import React from 'react';
const LABEL_18835 = 'component_18835';
export function Component18835({ value = 18835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18835, 'data-value': derived.doubled }, children);
}
export default Component18835;
