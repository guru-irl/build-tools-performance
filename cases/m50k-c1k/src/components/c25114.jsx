import React from 'react';
const LABEL_25114 = 'component_25114';
export function Component25114({ value = 25114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25114, 'data-value': derived.doubled }, children);
}
export default Component25114;
