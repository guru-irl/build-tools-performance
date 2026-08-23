import React from 'react';
const LABEL_24474 = 'component_24474';
export function Component24474({ value = 24474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24474, 'data-value': derived.doubled }, children);
}
export default Component24474;
