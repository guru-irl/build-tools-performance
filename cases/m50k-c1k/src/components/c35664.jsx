import React from 'react';
const LABEL_35664 = 'component_35664';
export function Component35664({ value = 35664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35664, 'data-value': derived.doubled }, children);
}
export default Component35664;
