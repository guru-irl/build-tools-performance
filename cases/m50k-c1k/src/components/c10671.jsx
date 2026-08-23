import React from 'react';
const LABEL_10671 = 'component_10671';
export function Component10671({ value = 10671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10671, 'data-value': derived.doubled }, children);
}
export default Component10671;
