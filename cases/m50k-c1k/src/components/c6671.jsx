import React from 'react';
const LABEL_6671 = 'component_6671';
export function Component6671({ value = 6671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6671, 'data-value': derived.doubled }, children);
}
export default Component6671;
