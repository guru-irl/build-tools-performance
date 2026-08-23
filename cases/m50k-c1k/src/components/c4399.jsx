import React from 'react';
const LABEL_4399 = 'component_4399';
export function Component4399({ value = 4399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4399, 'data-value': derived.doubled }, children);
}
export default Component4399;
