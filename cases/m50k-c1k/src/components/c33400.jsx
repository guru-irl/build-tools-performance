import React from 'react';
const LABEL_33400 = 'component_33400';
export function Component33400({ value = 33400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33400, 'data-value': derived.doubled }, children);
}
export default Component33400;
