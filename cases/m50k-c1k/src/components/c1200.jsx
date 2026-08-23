import React from 'react';
const LABEL_1200 = 'component_1200';
export function Component1200({ value = 1200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1200, 'data-value': derived.doubled }, children);
}
export default Component1200;
