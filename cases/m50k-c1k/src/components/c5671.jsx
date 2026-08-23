import React from 'react';
const LABEL_5671 = 'component_5671';
export function Component5671({ value = 5671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5671, 'data-value': derived.doubled }, children);
}
export default Component5671;
