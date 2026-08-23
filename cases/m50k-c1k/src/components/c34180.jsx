import React from 'react';
const LABEL_34180 = 'component_34180';
export function Component34180({ value = 34180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34180, 'data-value': derived.doubled }, children);
}
export default Component34180;
