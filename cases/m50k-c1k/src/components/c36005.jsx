import React from 'react';
const LABEL_36005 = 'component_36005';
export function Component36005({ value = 36005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36005, 'data-value': derived.doubled }, children);
}
export default Component36005;
