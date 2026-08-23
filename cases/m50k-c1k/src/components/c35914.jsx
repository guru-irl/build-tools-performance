import React from 'react';
const LABEL_35914 = 'component_35914';
export function Component35914({ value = 35914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35914, 'data-value': derived.doubled }, children);
}
export default Component35914;
