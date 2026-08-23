import React from 'react';
const LABEL_6512 = 'component_6512';
export function Component6512({ value = 6512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6512, 'data-value': derived.doubled }, children);
}
export default Component6512;
