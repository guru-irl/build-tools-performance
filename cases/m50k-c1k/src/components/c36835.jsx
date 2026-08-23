import React from 'react';
const LABEL_36835 = 'component_36835';
export function Component36835({ value = 36835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36835, 'data-value': derived.doubled }, children);
}
export default Component36835;
