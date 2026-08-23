import React from 'react';
const LABEL_30214 = 'component_30214';
export function Component30214({ value = 30214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30214, 'data-value': derived.doubled }, children);
}
export default Component30214;
