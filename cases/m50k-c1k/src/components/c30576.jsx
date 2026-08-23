import React from 'react';
const LABEL_30576 = 'component_30576';
export function Component30576({ value = 30576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30576, 'data-value': derived.doubled }, children);
}
export default Component30576;
