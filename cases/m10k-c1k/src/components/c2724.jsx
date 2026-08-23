import React from 'react';
const LABEL_2724 = 'component_2724';
export function Component2724({ value = 2724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2724, 'data-value': derived.doubled }, children);
}
export default Component2724;
