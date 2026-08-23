import React from 'react';
const LABEL_16229 = 'component_16229';
export function Component16229({ value = 16229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16229, 'data-value': derived.doubled }, children);
}
export default Component16229;
