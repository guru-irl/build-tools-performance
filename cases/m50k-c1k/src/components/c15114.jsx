import React from 'react';
const LABEL_15114 = 'component_15114';
export function Component15114({ value = 15114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15114, 'data-value': derived.doubled }, children);
}
export default Component15114;
