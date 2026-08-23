import React from 'react';
const LABEL_671 = 'component_671';
export function Component671({ value = 671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_671, 'data-value': derived.doubled }, children);
}
export default Component671;
