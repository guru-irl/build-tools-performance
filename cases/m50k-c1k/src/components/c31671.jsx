import React from 'react';
const LABEL_31671 = 'component_31671';
export function Component31671({ value = 31671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31671, 'data-value': derived.doubled }, children);
}
export default Component31671;
