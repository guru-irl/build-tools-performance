import React from 'react';
const LABEL_10048 = 'component_10048';
export function Component10048({ value = 10048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10048, 'data-value': derived.doubled }, children);
}
export default Component10048;
