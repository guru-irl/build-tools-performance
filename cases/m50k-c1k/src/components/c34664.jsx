import React from 'react';
const LABEL_34664 = 'component_34664';
export function Component34664({ value = 34664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34664, 'data-value': derived.doubled }, children);
}
export default Component34664;
