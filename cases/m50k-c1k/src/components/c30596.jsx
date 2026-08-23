import React from 'react';
const LABEL_30596 = 'component_30596';
export function Component30596({ value = 30596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30596, 'data-value': derived.doubled }, children);
}
export default Component30596;
