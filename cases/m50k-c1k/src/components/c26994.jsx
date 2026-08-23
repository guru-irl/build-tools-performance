import React from 'react';
const LABEL_26994 = 'component_26994';
export function Component26994({ value = 26994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26994, 'data-value': derived.doubled }, children);
}
export default Component26994;
