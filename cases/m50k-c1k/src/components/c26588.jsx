import React from 'react';
const LABEL_26588 = 'component_26588';
export function Component26588({ value = 26588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26588, 'data-value': derived.doubled }, children);
}
export default Component26588;
