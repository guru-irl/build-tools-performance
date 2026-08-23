import React from 'react';
const LABEL_8247 = 'component_8247';
export function Component8247({ value = 8247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8247, 'data-value': derived.doubled }, children);
}
export default Component8247;
