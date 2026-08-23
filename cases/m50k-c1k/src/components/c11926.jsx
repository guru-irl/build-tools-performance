import React from 'react';
const LABEL_11926 = 'component_11926';
export function Component11926({ value = 11926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11926, 'data-value': derived.doubled }, children);
}
export default Component11926;
