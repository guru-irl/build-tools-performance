import React from 'react';
const LABEL_34534 = 'component_34534';
export function Component34534({ value = 34534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34534, 'data-value': derived.doubled }, children);
}
export default Component34534;
