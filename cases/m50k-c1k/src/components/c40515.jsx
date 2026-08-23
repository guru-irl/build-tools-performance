import React from 'react';
const LABEL_40515 = 'component_40515';
export function Component40515({ value = 40515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40515, 'data-value': derived.doubled }, children);
}
export default Component40515;
