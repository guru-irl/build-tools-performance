import React from 'react';
const LABEL_34689 = 'component_34689';
export function Component34689({ value = 34689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34689, 'data-value': derived.doubled }, children);
}
export default Component34689;
