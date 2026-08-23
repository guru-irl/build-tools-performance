import React from 'react';
const LABEL_30945 = 'component_30945';
export function Component30945({ value = 30945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30945, 'data-value': derived.doubled }, children);
}
export default Component30945;
