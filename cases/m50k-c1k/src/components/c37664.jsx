import React from 'react';
const LABEL_37664 = 'component_37664';
export function Component37664({ value = 37664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37664, 'data-value': derived.doubled }, children);
}
export default Component37664;
