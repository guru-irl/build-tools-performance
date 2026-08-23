import React from 'react';
const LABEL_32259 = 'component_32259';
export function Component32259({ value = 32259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32259, 'data-value': derived.doubled }, children);
}
export default Component32259;
