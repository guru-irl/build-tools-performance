import React from 'react';
const LABEL_35242 = 'component_35242';
export function Component35242({ value = 35242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35242, 'data-value': derived.doubled }, children);
}
export default Component35242;
