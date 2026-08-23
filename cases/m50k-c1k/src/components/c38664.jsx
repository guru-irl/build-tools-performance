import React from 'react';
const LABEL_38664 = 'component_38664';
export function Component38664({ value = 38664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38664, 'data-value': derived.doubled }, children);
}
export default Component38664;
