import React from 'react';
const LABEL_3671 = 'component_3671';
export function Component3671({ value = 3671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3671, 'data-value': derived.doubled }, children);
}
export default Component3671;
