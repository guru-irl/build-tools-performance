import React from 'react';
const LABEL_10111 = 'component_10111';
export function Component10111({ value = 10111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10111, 'data-value': derived.doubled }, children);
}
export default Component10111;
