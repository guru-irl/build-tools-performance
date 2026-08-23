import React from 'react';
const LABEL_8140 = 'component_8140';
export function Component8140({ value = 8140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8140, 'data-value': derived.doubled }, children);
}
export default Component8140;
