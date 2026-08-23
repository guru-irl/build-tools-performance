import React from 'react';
const LABEL_14515 = 'component_14515';
export function Component14515({ value = 14515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14515, 'data-value': derived.doubled }, children);
}
export default Component14515;
