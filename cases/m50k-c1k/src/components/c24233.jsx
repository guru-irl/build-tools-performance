import React from 'react';
const LABEL_24233 = 'component_24233';
export function Component24233({ value = 24233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24233, 'data-value': derived.doubled }, children);
}
export default Component24233;
