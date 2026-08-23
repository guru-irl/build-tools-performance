import React from 'react';
const LABEL_46732 = 'component_46732';
export function Component46732({ value = 46732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46732, 'data-value': derived.doubled }, children);
}
export default Component46732;
