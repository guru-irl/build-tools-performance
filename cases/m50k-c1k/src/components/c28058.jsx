import React from 'react';
const LABEL_28058 = 'component_28058';
export function Component28058({ value = 28058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28058, 'data-value': derived.doubled }, children);
}
export default Component28058;
