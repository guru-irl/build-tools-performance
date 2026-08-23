import React from 'react';
const LABEL_36664 = 'component_36664';
export function Component36664({ value = 36664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36664, 'data-value': derived.doubled }, children);
}
export default Component36664;
