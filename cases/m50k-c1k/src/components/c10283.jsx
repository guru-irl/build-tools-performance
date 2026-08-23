import React from 'react';
const LABEL_10283 = 'component_10283';
export function Component10283({ value = 10283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10283, 'data-value': derived.doubled }, children);
}
export default Component10283;
