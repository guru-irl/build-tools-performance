import React from 'react';
const LABEL_21735 = 'component_21735';
export function Component21735({ value = 21735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21735, 'data-value': derived.doubled }, children);
}
export default Component21735;
