import React from 'react';
const LABEL_28788 = 'component_28788';
export function Component28788({ value = 28788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28788, 'data-value': derived.doubled }, children);
}
export default Component28788;
