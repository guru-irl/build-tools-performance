import React from 'react';
const LABEL_30419 = 'component_30419';
export function Component30419({ value = 30419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30419, 'data-value': derived.doubled }, children);
}
export default Component30419;
