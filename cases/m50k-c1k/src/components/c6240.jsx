import React from 'react';
const LABEL_6240 = 'component_6240';
export function Component6240({ value = 6240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6240, 'data-value': derived.doubled }, children);
}
export default Component6240;
