import React from 'react';
const LABEL_21994 = 'component_21994';
export function Component21994({ value = 21994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21994, 'data-value': derived.doubled }, children);
}
export default Component21994;
