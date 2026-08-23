import React from 'react';
const LABEL_25848 = 'component_25848';
export function Component25848({ value = 25848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25848, 'data-value': derived.doubled }, children);
}
export default Component25848;
