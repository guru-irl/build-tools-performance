import React from 'react';
const LABEL_12752 = 'component_12752';
export function Component12752({ value = 12752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12752, 'data-value': derived.doubled }, children);
}
export default Component12752;
