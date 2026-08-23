import React from 'react';
const LABEL_33257 = 'component_33257';
export function Component33257({ value = 33257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33257, 'data-value': derived.doubled }, children);
}
export default Component33257;
