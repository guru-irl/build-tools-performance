import React from 'react';
const LABEL_11945 = 'component_11945';
export function Component11945({ value = 11945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11945, 'data-value': derived.doubled }, children);
}
export default Component11945;
