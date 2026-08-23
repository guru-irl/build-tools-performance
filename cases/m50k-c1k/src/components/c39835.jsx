import React from 'react';
const LABEL_39835 = 'component_39835';
export function Component39835({ value = 39835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39835, 'data-value': derived.doubled }, children);
}
export default Component39835;
