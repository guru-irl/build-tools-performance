import React from 'react';
const LABEL_30783 = 'component_30783';
export function Component30783({ value = 30783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30783, 'data-value': derived.doubled }, children);
}
export default Component30783;
