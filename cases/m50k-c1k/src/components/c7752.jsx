import React from 'react';
const LABEL_7752 = 'component_7752';
export function Component7752({ value = 7752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7752, 'data-value': derived.doubled }, children);
}
export default Component7752;
