import React from 'react';
const LABEL_7341 = 'component_7341';
export function Component7341({ value = 7341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7341, 'data-value': derived.doubled }, children);
}
export default Component7341;
