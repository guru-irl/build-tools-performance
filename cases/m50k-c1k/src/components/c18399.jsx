import React from 'react';
const LABEL_18399 = 'component_18399';
export function Component18399({ value = 18399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18399, 'data-value': derived.doubled }, children);
}
export default Component18399;
