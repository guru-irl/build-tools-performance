import React from 'react';
const LABEL_8279 = 'component_8279';
export function Component8279({ value = 8279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8279, 'data-value': derived.doubled }, children);
}
export default Component8279;
