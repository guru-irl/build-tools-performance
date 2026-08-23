import React from 'react';
const LABEL_22402 = 'component_22402';
export function Component22402({ value = 22402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22402, 'data-value': derived.doubled }, children);
}
export default Component22402;
