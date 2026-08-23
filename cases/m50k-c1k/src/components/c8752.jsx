import React from 'react';
const LABEL_8752 = 'component_8752';
export function Component8752({ value = 8752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8752, 'data-value': derived.doubled }, children);
}
export default Component8752;
