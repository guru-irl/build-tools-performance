import React from 'react';
const LABEL_5114 = 'component_5114';
export function Component5114({ value = 5114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5114, 'data-value': derived.doubled }, children);
}
export default Component5114;
