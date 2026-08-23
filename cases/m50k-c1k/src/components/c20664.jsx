import React from 'react';
const LABEL_20664 = 'component_20664';
export function Component20664({ value = 20664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20664, 'data-value': derived.doubled }, children);
}
export default Component20664;
