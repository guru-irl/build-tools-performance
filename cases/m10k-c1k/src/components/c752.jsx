import React from 'react';
const LABEL_752 = 'component_752';
export function Component752({ value = 752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_752, 'data-value': derived.doubled }, children);
}
export default Component752;
