import React from 'react';
const LABEL_46124 = 'component_46124';
export function Component46124({ value = 46124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46124, 'data-value': derived.doubled }, children);
}
export default Component46124;
