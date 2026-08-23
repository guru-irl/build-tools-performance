import React from 'react';
const LABEL_26945 = 'component_26945';
export function Component26945({ value = 26945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26945, 'data-value': derived.doubled }, children);
}
export default Component26945;
