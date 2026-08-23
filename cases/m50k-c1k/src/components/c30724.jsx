import React from 'react';
const LABEL_30724 = 'component_30724';
export function Component30724({ value = 30724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30724, 'data-value': derived.doubled }, children);
}
export default Component30724;
