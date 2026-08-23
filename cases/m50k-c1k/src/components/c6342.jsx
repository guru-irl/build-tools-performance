import React from 'react';
const LABEL_6342 = 'component_6342';
export function Component6342({ value = 6342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6342, 'data-value': derived.doubled }, children);
}
export default Component6342;
