import React from 'react';
const LABEL_38114 = 'component_38114';
export function Component38114({ value = 38114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38114, 'data-value': derived.doubled }, children);
}
export default Component38114;
