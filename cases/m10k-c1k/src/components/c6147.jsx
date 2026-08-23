import React from 'react';
const LABEL_6147 = 'component_6147';
export function Component6147({ value = 6147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6147, 'data-value': derived.doubled }, children);
}
export default Component6147;
