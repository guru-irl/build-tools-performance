import React from 'react';
const LABEL_6114 = 'component_6114';
export function Component6114({ value = 6114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6114, 'data-value': derived.doubled }, children);
}
export default Component6114;
