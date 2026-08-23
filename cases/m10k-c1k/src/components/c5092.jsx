import React from 'react';
const LABEL_5092 = 'component_5092';
export function Component5092({ value = 5092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5092, 'data-value': derived.doubled }, children);
}
export default Component5092;
