import React from 'react';
const LABEL_30502 = 'component_30502';
export function Component30502({ value = 30502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30502, 'data-value': derived.doubled }, children);
}
export default Component30502;
