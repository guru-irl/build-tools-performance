import React from 'react';
const LABEL_10242 = 'component_10242';
export function Component10242({ value = 10242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10242, 'data-value': derived.doubled }, children);
}
export default Component10242;
