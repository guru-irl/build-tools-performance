import React from 'react';
const LABEL_32131 = 'component_32131';
export function Component32131({ value = 32131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32131, 'data-value': derived.doubled }, children);
}
export default Component32131;
