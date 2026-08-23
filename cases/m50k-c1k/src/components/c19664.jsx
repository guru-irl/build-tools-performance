import React from 'react';
const LABEL_19664 = 'component_19664';
export function Component19664({ value = 19664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19664, 'data-value': derived.doubled }, children);
}
export default Component19664;
