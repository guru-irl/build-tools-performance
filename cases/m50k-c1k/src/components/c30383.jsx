import React from 'react';
const LABEL_30383 = 'component_30383';
export function Component30383({ value = 30383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30383, 'data-value': derived.doubled }, children);
}
export default Component30383;
