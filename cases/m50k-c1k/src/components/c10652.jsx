import React from 'react';
const LABEL_10652 = 'component_10652';
export function Component10652({ value = 10652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10652, 'data-value': derived.doubled }, children);
}
export default Component10652;
