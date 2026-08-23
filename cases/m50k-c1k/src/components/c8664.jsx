import React from 'react';
const LABEL_8664 = 'component_8664';
export function Component8664({ value = 8664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8664, 'data-value': derived.doubled }, children);
}
export default Component8664;
