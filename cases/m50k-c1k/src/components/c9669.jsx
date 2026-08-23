import React from 'react';
const LABEL_9669 = 'component_9669';
export function Component9669({ value = 9669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9669, 'data-value': derived.doubled }, children);
}
export default Component9669;
