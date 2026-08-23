import React from 'react';
const LABEL_22400 = 'component_22400';
export function Component22400({ value = 22400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22400, 'data-value': derived.doubled }, children);
}
export default Component22400;
