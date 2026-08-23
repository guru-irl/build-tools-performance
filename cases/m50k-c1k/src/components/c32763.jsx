import React from 'react';
const LABEL_32763 = 'component_32763';
export function Component32763({ value = 32763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32763, 'data-value': derived.doubled }, children);
}
export default Component32763;
