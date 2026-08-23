import React from 'react';
const LABEL_15424 = 'component_15424';
export function Component15424({ value = 15424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15424, 'data-value': derived.doubled }, children);
}
export default Component15424;
