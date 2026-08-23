import React from 'react';
const LABEL_3664 = 'component_3664';
export function Component3664({ value = 3664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3664, 'data-value': derived.doubled }, children);
}
export default Component3664;
