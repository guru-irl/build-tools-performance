import React from 'react';
const LABEL_14945 = 'component_14945';
export function Component14945({ value = 14945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14945, 'data-value': derived.doubled }, children);
}
export default Component14945;
