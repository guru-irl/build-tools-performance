import React from 'react';
const LABEL_11200 = 'component_11200';
export function Component11200({ value = 11200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11200, 'data-value': derived.doubled }, children);
}
export default Component11200;
