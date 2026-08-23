import React from 'react';
const LABEL_46114 = 'component_46114';
export function Component46114({ value = 46114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46114, 'data-value': derived.doubled }, children);
}
export default Component46114;
