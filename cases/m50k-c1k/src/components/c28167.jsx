import React from 'react';
const LABEL_28167 = 'component_28167';
export function Component28167({ value = 28167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28167, 'data-value': derived.doubled }, children);
}
export default Component28167;
