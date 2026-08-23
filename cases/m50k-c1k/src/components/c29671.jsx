import React from 'react';
const LABEL_29671 = 'component_29671';
export function Component29671({ value = 29671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29671, 'data-value': derived.doubled }, children);
}
export default Component29671;
