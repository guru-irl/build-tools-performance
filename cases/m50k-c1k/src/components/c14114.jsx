import React from 'react';
const LABEL_14114 = 'component_14114';
export function Component14114({ value = 14114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14114, 'data-value': derived.doubled }, children);
}
export default Component14114;
