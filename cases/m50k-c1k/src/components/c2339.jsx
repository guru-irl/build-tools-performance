import React from 'react';
const LABEL_2339 = 'component_2339';
export function Component2339({ value = 2339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2339, 'data-value': derived.doubled }, children);
}
export default Component2339;
