import React from 'react';
const LABEL_22721 = 'component_22721';
export function Component22721({ value = 22721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22721, 'data-value': derived.doubled }, children);
}
export default Component22721;
