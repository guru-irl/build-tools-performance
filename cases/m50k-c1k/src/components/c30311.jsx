import React from 'react';
const LABEL_30311 = 'component_30311';
export function Component30311({ value = 30311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30311, 'data-value': derived.doubled }, children);
}
export default Component30311;
