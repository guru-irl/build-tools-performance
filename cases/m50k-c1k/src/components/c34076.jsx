import React from 'react';
const LABEL_34076 = 'component_34076';
export function Component34076({ value = 34076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34076, 'data-value': derived.doubled }, children);
}
export default Component34076;
