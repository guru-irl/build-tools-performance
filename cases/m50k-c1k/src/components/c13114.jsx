import React from 'react';
const LABEL_13114 = 'component_13114';
export function Component13114({ value = 13114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13114, 'data-value': derived.doubled }, children);
}
export default Component13114;
