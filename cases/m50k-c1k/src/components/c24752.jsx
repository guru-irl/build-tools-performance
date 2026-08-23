import React from 'react';
const LABEL_24752 = 'component_24752';
export function Component24752({ value = 24752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24752, 'data-value': derived.doubled }, children);
}
export default Component24752;
