import React from 'react';
const LABEL_12739 = 'component_12739';
export function Component12739({ value = 12739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12739, 'data-value': derived.doubled }, children);
}
export default Component12739;
