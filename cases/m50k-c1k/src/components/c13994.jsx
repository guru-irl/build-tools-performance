import React from 'react';
const LABEL_13994 = 'component_13994';
export function Component13994({ value = 13994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13994, 'data-value': derived.doubled }, children);
}
export default Component13994;
