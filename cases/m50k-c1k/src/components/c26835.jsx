import React from 'react';
const LABEL_26835 = 'component_26835';
export function Component26835({ value = 26835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26835, 'data-value': derived.doubled }, children);
}
export default Component26835;
