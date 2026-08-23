import React from 'react';
const LABEL_30688 = 'component_30688';
export function Component30688({ value = 30688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30688, 'data-value': derived.doubled }, children);
}
export default Component30688;
