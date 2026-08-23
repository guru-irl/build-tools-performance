import React from 'react';
const LABEL_30351 = 'component_30351';
export function Component30351({ value = 30351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30351, 'data-value': derived.doubled }, children);
}
export default Component30351;
