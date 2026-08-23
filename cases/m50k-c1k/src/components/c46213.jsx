import React from 'react';
const LABEL_46213 = 'component_46213';
export function Component46213({ value = 46213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46213, 'data-value': derived.doubled }, children);
}
export default Component46213;
