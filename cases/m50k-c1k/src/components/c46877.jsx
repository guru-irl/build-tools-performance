import React from 'react';
const LABEL_46877 = 'component_46877';
export function Component46877({ value = 46877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46877, 'data-value': derived.doubled }, children);
}
export default Component46877;
