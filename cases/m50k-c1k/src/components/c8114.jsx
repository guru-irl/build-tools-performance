import React from 'react';
const LABEL_8114 = 'component_8114';
export function Component8114({ value = 8114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8114, 'data-value': derived.doubled }, children);
}
export default Component8114;
