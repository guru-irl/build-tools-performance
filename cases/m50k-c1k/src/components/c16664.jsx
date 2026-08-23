import React from 'react';
const LABEL_16664 = 'component_16664';
export function Component16664({ value = 16664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16664, 'data-value': derived.doubled }, children);
}
export default Component16664;
