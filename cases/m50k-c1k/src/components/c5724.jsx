import React from 'react';
const LABEL_5724 = 'component_5724';
export function Component5724({ value = 5724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5724, 'data-value': derived.doubled }, children);
}
export default Component5724;
