import React from 'react';
const LABEL_10114 = 'component_10114';
export function Component10114({ value = 10114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10114, 'data-value': derived.doubled }, children);
}
export default Component10114;
