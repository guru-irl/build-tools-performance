import React from 'react';
const LABEL_37283 = 'component_37283';
export function Component37283({ value = 37283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37283, 'data-value': derived.doubled }, children);
}
export default Component37283;
