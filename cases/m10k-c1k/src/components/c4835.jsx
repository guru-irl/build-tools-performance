import React from 'react';
const LABEL_4835 = 'component_4835';
export function Component4835({ value = 4835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4835, 'data-value': derived.doubled }, children);
}
export default Component4835;
