import React from 'react';
const LABEL_36994 = 'component_36994';
export function Component36994({ value = 36994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36994, 'data-value': derived.doubled }, children);
}
export default Component36994;
