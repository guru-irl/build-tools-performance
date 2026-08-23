import React from 'react';
const LABEL_35752 = 'component_35752';
export function Component35752({ value = 35752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35752, 'data-value': derived.doubled }, children);
}
export default Component35752;
