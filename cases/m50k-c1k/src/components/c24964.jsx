import React from 'react';
const LABEL_24964 = 'component_24964';
export function Component24964({ value = 24964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24964, 'data-value': derived.doubled }, children);
}
export default Component24964;
