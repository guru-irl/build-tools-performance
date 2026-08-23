import React from 'react';
const LABEL_26140 = 'component_26140';
export function Component26140({ value = 26140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26140, 'data-value': derived.doubled }, children);
}
export default Component26140;
