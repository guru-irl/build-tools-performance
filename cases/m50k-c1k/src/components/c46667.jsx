import React from 'react';
const LABEL_46667 = 'component_46667';
export function Component46667({ value = 46667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46667, 'data-value': derived.doubled }, children);
}
export default Component46667;
