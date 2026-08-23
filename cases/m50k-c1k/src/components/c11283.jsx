import React from 'react';
const LABEL_11283 = 'component_11283';
export function Component11283({ value = 11283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11283, 'data-value': derived.doubled }, children);
}
export default Component11283;
