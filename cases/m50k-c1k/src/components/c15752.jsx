import React from 'react';
const LABEL_15752 = 'component_15752';
export function Component15752({ value = 15752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15752, 'data-value': derived.doubled }, children);
}
export default Component15752;
