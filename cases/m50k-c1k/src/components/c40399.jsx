import React from 'react';
const LABEL_40399 = 'component_40399';
export function Component40399({ value = 40399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40399, 'data-value': derived.doubled }, children);
}
export default Component40399;
