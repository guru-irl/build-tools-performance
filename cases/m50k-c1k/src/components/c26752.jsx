import React from 'react';
const LABEL_26752 = 'component_26752';
export function Component26752({ value = 26752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26752, 'data-value': derived.doubled }, children);
}
export default Component26752;
