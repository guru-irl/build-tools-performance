import React from 'react';
const LABEL_237 = 'component_237';
export function Component237({ value = 237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_237, 'data-value': derived.doubled }, children);
}
export default Component237;
