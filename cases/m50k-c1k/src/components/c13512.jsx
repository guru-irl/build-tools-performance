import React from 'react';
const LABEL_13512 = 'component_13512';
export function Component13512({ value = 13512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13512, 'data-value': derived.doubled }, children);
}
export default Component13512;
