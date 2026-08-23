import React from 'react';
const LABEL_30232 = 'component_30232';
export function Component30232({ value = 30232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30232, 'data-value': derived.doubled }, children);
}
export default Component30232;
