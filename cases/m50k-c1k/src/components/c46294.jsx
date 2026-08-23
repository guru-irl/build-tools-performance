import React from 'react';
const LABEL_46294 = 'component_46294';
export function Component46294({ value = 46294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46294, 'data-value': derived.doubled }, children);
}
export default Component46294;
