import React from 'react';
const LABEL_35283 = 'component_35283';
export function Component35283({ value = 35283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35283, 'data-value': derived.doubled }, children);
}
export default Component35283;
