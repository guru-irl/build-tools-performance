import React from 'react';
const LABEL_11140 = 'component_11140';
export function Component11140({ value = 11140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11140, 'data-value': derived.doubled }, children);
}
export default Component11140;
