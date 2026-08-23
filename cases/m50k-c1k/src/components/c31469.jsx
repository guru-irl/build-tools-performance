import React from 'react';
const LABEL_31469 = 'component_31469';
export function Component31469({ value = 31469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31469, 'data-value': derived.doubled }, children);
}
export default Component31469;
