import React from 'react';
const LABEL_36671 = 'component_36671';
export function Component36671({ value = 36671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36671, 'data-value': derived.doubled }, children);
}
export default Component36671;
