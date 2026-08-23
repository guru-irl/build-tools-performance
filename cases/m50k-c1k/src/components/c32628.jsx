import React from 'react';
const LABEL_32628 = 'component_32628';
export function Component32628({ value = 32628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32628, 'data-value': derived.doubled }, children);
}
export default Component32628;
