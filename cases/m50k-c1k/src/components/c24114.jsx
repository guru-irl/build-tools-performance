import React from 'react';
const LABEL_24114 = 'component_24114';
export function Component24114({ value = 24114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24114, 'data-value': derived.doubled }, children);
}
export default Component24114;
