import React from 'react';
const LABEL_46249 = 'component_46249';
export function Component46249({ value = 46249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46249, 'data-value': derived.doubled }, children);
}
export default Component46249;
