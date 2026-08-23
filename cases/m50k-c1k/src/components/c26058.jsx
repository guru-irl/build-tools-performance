import React from 'react';
const LABEL_26058 = 'component_26058';
export function Component26058({ value = 26058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26058, 'data-value': derived.doubled }, children);
}
export default Component26058;
