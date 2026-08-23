import React from 'react';
const LABEL_23418 = 'component_23418';
export function Component23418({ value = 23418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23418, 'data-value': derived.doubled }, children);
}
export default Component23418;
