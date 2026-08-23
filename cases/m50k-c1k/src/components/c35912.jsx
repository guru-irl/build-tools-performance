import React from 'react';
const LABEL_35912 = 'component_35912';
export function Component35912({ value = 35912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35912, 'data-value': derived.doubled }, children);
}
export default Component35912;
