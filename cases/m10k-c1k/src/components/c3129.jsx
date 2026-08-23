import React from 'react';
const LABEL_3129 = 'component_3129';
export function Component3129({ value = 3129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3129, 'data-value': derived.doubled }, children);
}
export default Component3129;
