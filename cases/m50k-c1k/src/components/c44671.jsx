import React from 'react';
const LABEL_44671 = 'component_44671';
export function Component44671({ value = 44671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44671, 'data-value': derived.doubled }, children);
}
export default Component44671;
