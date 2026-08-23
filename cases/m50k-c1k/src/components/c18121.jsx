import React from 'react';
const LABEL_18121 = 'component_18121';
export function Component18121({ value = 18121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18121, 'data-value': derived.doubled }, children);
}
export default Component18121;
