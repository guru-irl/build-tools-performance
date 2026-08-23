import React from 'react';
const LABEL_19456 = 'component_19456';
export function Component19456({ value = 19456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19456, 'data-value': derived.doubled }, children);
}
export default Component19456;
