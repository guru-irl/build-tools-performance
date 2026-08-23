import React from 'react';
const LABEL_11515 = 'component_11515';
export function Component11515({ value = 11515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11515, 'data-value': derived.doubled }, children);
}
export default Component11515;
