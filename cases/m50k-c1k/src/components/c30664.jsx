import React from 'react';
const LABEL_30664 = 'component_30664';
export function Component30664({ value = 30664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30664, 'data-value': derived.doubled }, children);
}
export default Component30664;
