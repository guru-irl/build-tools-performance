import React from 'react';
const LABEL_18114 = 'component_18114';
export function Component18114({ value = 18114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18114, 'data-value': derived.doubled }, children);
}
export default Component18114;
