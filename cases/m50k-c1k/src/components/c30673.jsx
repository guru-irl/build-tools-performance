import React from 'react';
const LABEL_30673 = 'component_30673';
export function Component30673({ value = 30673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30673, 'data-value': derived.doubled }, children);
}
export default Component30673;
