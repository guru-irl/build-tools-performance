import React from 'react';
const LABEL_29260 = 'component_29260';
export function Component29260({ value = 29260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29260, 'data-value': derived.doubled }, children);
}
export default Component29260;
