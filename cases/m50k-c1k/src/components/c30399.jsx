import React from 'react';
const LABEL_30399 = 'component_30399';
export function Component30399({ value = 30399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30399, 'data-value': derived.doubled }, children);
}
export default Component30399;
