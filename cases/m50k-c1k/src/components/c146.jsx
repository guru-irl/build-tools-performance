import React from 'react';
const LABEL_146 = 'component_146';
export function Component146({ value = 146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_146, 'data-value': derived.doubled }, children);
}
export default Component146;
