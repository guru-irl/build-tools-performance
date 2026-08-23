import React from 'react';
const LABEL_2794 = 'component_2794';
export function Component2794({ value = 2794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2794, 'data-value': derived.doubled }, children);
}
export default Component2794;
