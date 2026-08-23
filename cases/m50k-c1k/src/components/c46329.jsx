import React from 'react';
const LABEL_46329 = 'component_46329';
export function Component46329({ value = 46329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46329, 'data-value': derived.doubled }, children);
}
export default Component46329;
