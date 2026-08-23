import React from 'react';
const LABEL_18252 = 'component_18252';
export function Component18252({ value = 18252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18252, 'data-value': derived.doubled }, children);
}
export default Component18252;
