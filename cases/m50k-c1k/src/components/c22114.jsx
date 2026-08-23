import React from 'react';
const LABEL_22114 = 'component_22114';
export function Component22114({ value = 22114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22114, 'data-value': derived.doubled }, children);
}
export default Component22114;
