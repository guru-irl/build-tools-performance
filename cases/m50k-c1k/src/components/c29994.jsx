import React from 'react';
const LABEL_29994 = 'component_29994';
export function Component29994({ value = 29994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29994, 'data-value': derived.doubled }, children);
}
export default Component29994;
