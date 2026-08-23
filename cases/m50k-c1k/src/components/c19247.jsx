import React from 'react';
const LABEL_19247 = 'component_19247';
export function Component19247({ value = 19247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19247, 'data-value': derived.doubled }, children);
}
export default Component19247;
