import React from 'react';
const LABEL_23114 = 'component_23114';
export function Component23114({ value = 23114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23114, 'data-value': derived.doubled }, children);
}
export default Component23114;
