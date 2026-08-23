import React from 'react';
const LABEL_11835 = 'component_11835';
export function Component11835({ value = 11835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11835, 'data-value': derived.doubled }, children);
}
export default Component11835;
