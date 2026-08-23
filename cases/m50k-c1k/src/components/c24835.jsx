import React from 'react';
const LABEL_24835 = 'component_24835';
export function Component24835({ value = 24835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24835, 'data-value': derived.doubled }, children);
}
export default Component24835;
