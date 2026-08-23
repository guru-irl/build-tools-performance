import React from 'react';
const LABEL_32114 = 'component_32114';
export function Component32114({ value = 32114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32114, 'data-value': derived.doubled }, children);
}
export default Component32114;
