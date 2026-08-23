import React from 'react';
const LABEL_31114 = 'component_31114';
export function Component31114({ value = 31114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31114, 'data-value': derived.doubled }, children);
}
export default Component31114;
