import React from 'react';
const LABEL_32752 = 'component_32752';
export function Component32752({ value = 32752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32752, 'data-value': derived.doubled }, children);
}
export default Component32752;
