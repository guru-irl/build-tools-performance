import React from 'react';
const LABEL_33689 = 'component_33689';
export function Component33689({ value = 33689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33689, 'data-value': derived.doubled }, children);
}
export default Component33689;
