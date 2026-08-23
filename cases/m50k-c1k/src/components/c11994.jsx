import React from 'react';
const LABEL_11994 = 'component_11994';
export function Component11994({ value = 11994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11994, 'data-value': derived.doubled }, children);
}
export default Component11994;
