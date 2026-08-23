import React from 'react';
const LABEL_39257 = 'component_39257';
export function Component39257({ value = 39257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39257, 'data-value': derived.doubled }, children);
}
export default Component39257;
