import React from 'react';
const LABEL_7912 = 'component_7912';
export function Component7912({ value = 7912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7912, 'data-value': derived.doubled }, children);
}
export default Component7912;
