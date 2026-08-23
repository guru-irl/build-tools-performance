import React from 'react';
const LABEL_26005 = 'component_26005';
export function Component26005({ value = 26005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26005, 'data-value': derived.doubled }, children);
}
export default Component26005;
