import React from 'react';
const LABEL_32499 = 'component_32499';
export function Component32499({ value = 32499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32499, 'data-value': derived.doubled }, children);
}
export default Component32499;
