import React from 'react';
const LABEL_10443 = 'component_10443';
export function Component10443({ value = 10443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10443, 'data-value': derived.doubled }, children);
}
export default Component10443;
