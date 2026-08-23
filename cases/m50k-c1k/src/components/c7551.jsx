import React from 'react';
const LABEL_7551 = 'component_7551';
export function Component7551({ value = 7551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7551, 'data-value': derived.doubled }, children);
}
export default Component7551;
