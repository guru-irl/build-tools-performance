import React from 'react';
const LABEL_34055 = 'component_34055';
export function Component34055({ value = 34055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34055, 'data-value': derived.doubled }, children);
}
export default Component34055;
