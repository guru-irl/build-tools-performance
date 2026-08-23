import React from 'react';
const LABEL_13945 = 'component_13945';
export function Component13945({ value = 13945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13945, 'data-value': derived.doubled }, children);
}
export default Component13945;
