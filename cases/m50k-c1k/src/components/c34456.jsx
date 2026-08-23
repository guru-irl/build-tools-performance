import React from 'react';
const LABEL_34456 = 'component_34456';
export function Component34456({ value = 34456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34456, 'data-value': derived.doubled }, children);
}
export default Component34456;
