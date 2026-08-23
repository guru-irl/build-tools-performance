import React from 'react';
const LABEL_24470 = 'component_24470';
export function Component24470({ value = 24470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24470, 'data-value': derived.doubled }, children);
}
export default Component24470;
