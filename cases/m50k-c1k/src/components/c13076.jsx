import React from 'react';
const LABEL_13076 = 'component_13076';
export function Component13076({ value = 13076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13076, 'data-value': derived.doubled }, children);
}
export default Component13076;
