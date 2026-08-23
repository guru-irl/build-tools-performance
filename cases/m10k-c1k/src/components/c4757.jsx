import React from 'react';
const LABEL_4757 = 'component_4757';
export function Component4757({ value = 4757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4757, 'data-value': derived.doubled }, children);
}
export default Component4757;
