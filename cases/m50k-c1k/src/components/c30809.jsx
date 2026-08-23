import React from 'react';
const LABEL_30809 = 'component_30809';
export function Component30809({ value = 30809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30809, 'data-value': derived.doubled }, children);
}
export default Component30809;
