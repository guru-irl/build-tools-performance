import React from 'react';
const LABEL_29114 = 'component_29114';
export function Component29114({ value = 29114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29114, 'data-value': derived.doubled }, children);
}
export default Component29114;
