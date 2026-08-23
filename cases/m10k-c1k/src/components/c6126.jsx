import React from 'react';
const LABEL_6126 = 'component_6126';
export function Component6126({ value = 6126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6126, 'data-value': derived.doubled }, children);
}
export default Component6126;
