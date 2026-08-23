import React from 'react';
const LABEL_30413 = 'component_30413';
export function Component30413({ value = 30413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30413, 'data-value': derived.doubled }, children);
}
export default Component30413;
