import React from 'react';
const LABEL_31835 = 'component_31835';
export function Component31835({ value = 31835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31835, 'data-value': derived.doubled }, children);
}
export default Component31835;
