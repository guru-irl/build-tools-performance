import React from 'react';
const LABEL_31945 = 'component_31945';
export function Component31945({ value = 31945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31945, 'data-value': derived.doubled }, children);
}
export default Component31945;
