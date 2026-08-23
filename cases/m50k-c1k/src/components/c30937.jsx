import React from 'react';
const LABEL_30937 = 'component_30937';
export function Component30937({ value = 30937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30937, 'data-value': derived.doubled }, children);
}
export default Component30937;
