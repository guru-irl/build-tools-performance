import React from 'react';
const LABEL_18619 = 'component_18619';
export function Component18619({ value = 18619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18619, 'data-value': derived.doubled }, children);
}
export default Component18619;
