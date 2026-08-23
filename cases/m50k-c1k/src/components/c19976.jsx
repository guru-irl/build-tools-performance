import React from 'react';
const LABEL_19976 = 'component_19976';
export function Component19976({ value = 19976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19976, 'data-value': derived.doubled }, children);
}
export default Component19976;
