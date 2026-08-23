import React from 'react';
const LABEL_28399 = 'component_28399';
export function Component28399({ value = 28399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28399, 'data-value': derived.doubled }, children);
}
export default Component28399;
