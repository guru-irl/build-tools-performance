import React from 'react';
const LABEL_34102 = 'component_34102';
export function Component34102({ value = 34102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34102, 'data-value': derived.doubled }, children);
}
export default Component34102;
