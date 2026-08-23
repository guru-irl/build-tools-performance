import React from 'react';
const LABEL_26114 = 'component_26114';
export function Component26114({ value = 26114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26114, 'data-value': derived.doubled }, children);
}
export default Component26114;
