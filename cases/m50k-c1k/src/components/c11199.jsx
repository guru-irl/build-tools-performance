import React from 'react';
const LABEL_11199 = 'component_11199';
export function Component11199({ value = 11199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11199, 'data-value': derived.doubled }, children);
}
export default Component11199;
