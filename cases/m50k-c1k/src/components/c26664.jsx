import React from 'react';
const LABEL_26664 = 'component_26664';
export function Component26664({ value = 26664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26664, 'data-value': derived.doubled }, children);
}
export default Component26664;
