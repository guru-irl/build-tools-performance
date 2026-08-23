import React from 'react';
const LABEL_23059 = 'component_23059';
export function Component23059({ value = 23059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23059, 'data-value': derived.doubled }, children);
}
export default Component23059;
