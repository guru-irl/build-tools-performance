import React from 'react';
const LABEL_22832 = 'component_22832';
export function Component22832({ value = 22832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22832, 'data-value': derived.doubled }, children);
}
export default Component22832;
