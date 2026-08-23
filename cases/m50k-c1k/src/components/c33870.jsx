import React from 'react';
const LABEL_33870 = 'component_33870';
export function Component33870({ value = 33870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33870, 'data-value': derived.doubled }, children);
}
export default Component33870;
