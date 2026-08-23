import React from 'react';
const LABEL_10334 = 'component_10334';
export function Component10334({ value = 10334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10334, 'data-value': derived.doubled }, children);
}
export default Component10334;
