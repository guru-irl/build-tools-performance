import React from 'react';
const LABEL_30458 = 'component_30458';
export function Component30458({ value = 30458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30458, 'data-value': derived.doubled }, children);
}
export default Component30458;
