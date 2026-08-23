import React from 'react';
const LABEL_30263 = 'component_30263';
export function Component30263({ value = 30263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30263, 'data-value': derived.doubled }, children);
}
export default Component30263;
