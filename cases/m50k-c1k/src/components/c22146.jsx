import React from 'react';
const LABEL_22146 = 'component_22146';
export function Component22146({ value = 22146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22146, 'data-value': derived.doubled }, children);
}
export default Component22146;
