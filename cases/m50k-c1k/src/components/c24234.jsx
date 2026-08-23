import React from 'react';
const LABEL_24234 = 'component_24234';
export function Component24234({ value = 24234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24234, 'data-value': derived.doubled }, children);
}
export default Component24234;
