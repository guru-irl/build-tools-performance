import React from 'react';
const LABEL_24612 = 'component_24612';
export function Component24612({ value = 24612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24612, 'data-value': derived.doubled }, children);
}
export default Component24612;
