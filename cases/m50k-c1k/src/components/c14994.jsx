import React from 'react';
const LABEL_14994 = 'component_14994';
export function Component14994({ value = 14994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14994, 'data-value': derived.doubled }, children);
}
export default Component14994;
