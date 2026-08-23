import React from 'react';
const LABEL_36721 = 'component_36721';
export function Component36721({ value = 36721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36721, 'data-value': derived.doubled }, children);
}
export default Component36721;
