import React from 'react';
const LABEL_38427 = 'component_38427';
export function Component38427({ value = 38427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38427, 'data-value': derived.doubled }, children);
}
export default Component38427;
