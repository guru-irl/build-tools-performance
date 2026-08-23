import React from 'react';
const LABEL_46064 = 'component_46064';
export function Component46064({ value = 46064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46064, 'data-value': derived.doubled }, children);
}
export default Component46064;
