import React from 'react';
const LABEL_26528 = 'component_26528';
export function Component26528({ value = 26528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26528, 'data-value': derived.doubled }, children);
}
export default Component26528;
