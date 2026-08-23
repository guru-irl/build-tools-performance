import React from 'react';
const LABEL_29774 = 'component_29774';
export function Component29774({ value = 29774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29774, 'data-value': derived.doubled }, children);
}
export default Component29774;
