import React from 'react';
const LABEL_37167 = 'component_37167';
export function Component37167({ value = 37167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37167, 'data-value': derived.doubled }, children);
}
export default Component37167;
