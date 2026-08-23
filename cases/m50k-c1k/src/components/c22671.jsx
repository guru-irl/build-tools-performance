import React from 'react';
const LABEL_22671 = 'component_22671';
export function Component22671({ value = 22671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22671, 'data-value': derived.doubled }, children);
}
export default Component22671;
