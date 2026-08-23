import React from 'react';
const LABEL_42945 = 'component_42945';
export function Component42945({ value = 42945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42945, 'data-value': derived.doubled }, children);
}
export default Component42945;
