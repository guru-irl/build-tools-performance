import React from 'react';
const LABEL_29664 = 'component_29664';
export function Component29664({ value = 29664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29664, 'data-value': derived.doubled }, children);
}
export default Component29664;
