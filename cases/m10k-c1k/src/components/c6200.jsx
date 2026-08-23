import React from 'react';
const LABEL_6200 = 'component_6200';
export function Component6200({ value = 6200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6200, 'data-value': derived.doubled }, children);
}
export default Component6200;
