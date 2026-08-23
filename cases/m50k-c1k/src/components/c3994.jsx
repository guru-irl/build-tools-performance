import React from 'react';
const LABEL_3994 = 'component_3994';
export function Component3994({ value = 3994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3994, 'data-value': derived.doubled }, children);
}
export default Component3994;
