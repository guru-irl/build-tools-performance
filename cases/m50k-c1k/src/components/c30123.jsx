import React from 'react';
const LABEL_30123 = 'component_30123';
export function Component30123({ value = 30123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30123, 'data-value': derived.doubled }, children);
}
export default Component30123;
