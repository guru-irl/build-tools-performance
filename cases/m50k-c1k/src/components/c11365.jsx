import React from 'react';
const LABEL_11365 = 'component_11365';
export function Component11365({ value = 11365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11365, 'data-value': derived.doubled }, children);
}
export default Component11365;
