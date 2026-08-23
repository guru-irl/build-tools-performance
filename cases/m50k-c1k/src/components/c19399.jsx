import React from 'react';
const LABEL_19399 = 'component_19399';
export function Component19399({ value = 19399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19399, 'data-value': derived.doubled }, children);
}
export default Component19399;
