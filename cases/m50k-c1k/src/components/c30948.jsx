import React from 'react';
const LABEL_30948 = 'component_30948';
export function Component30948({ value = 30948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30948, 'data-value': derived.doubled }, children);
}
export default Component30948;
