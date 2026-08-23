import React from 'react';
const LABEL_33059 = 'component_33059';
export function Component33059({ value = 33059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33059, 'data-value': derived.doubled }, children);
}
export default Component33059;
