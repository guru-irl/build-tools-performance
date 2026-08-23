import React from 'react';
const LABEL_24994 = 'component_24994';
export function Component24994({ value = 24994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24994, 'data-value': derived.doubled }, children);
}
export default Component24994;
