import React from 'react';
const LABEL_32857 = 'component_32857';
export function Component32857({ value = 32857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32857, 'data-value': derived.doubled }, children);
}
export default Component32857;
