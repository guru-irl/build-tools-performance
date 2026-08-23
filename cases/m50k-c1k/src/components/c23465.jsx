import React from 'react';
const LABEL_23465 = 'component_23465';
export function Component23465({ value = 23465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23465, 'data-value': derived.doubled }, children);
}
export default Component23465;
