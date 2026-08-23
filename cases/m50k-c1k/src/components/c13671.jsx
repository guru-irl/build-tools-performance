import React from 'react';
const LABEL_13671 = 'component_13671';
export function Component13671({ value = 13671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13671, 'data-value': derived.doubled }, children);
}
export default Component13671;
