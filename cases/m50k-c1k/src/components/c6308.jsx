import React from 'react';
const LABEL_6308 = 'component_6308';
export function Component6308({ value = 6308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6308, 'data-value': derived.doubled }, children);
}
export default Component6308;
