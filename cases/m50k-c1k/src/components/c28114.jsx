import React from 'react';
const LABEL_28114 = 'component_28114';
export function Component28114({ value = 28114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28114, 'data-value': derived.doubled }, children);
}
export default Component28114;
