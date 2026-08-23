import React from 'react';
const LABEL_32945 = 'component_32945';
export function Component32945({ value = 32945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32945, 'data-value': derived.doubled }, children);
}
export default Component32945;
