import React from 'react';
const LABEL_22049 = 'component_22049';
export function Component22049({ value = 22049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22049, 'data-value': derived.doubled }, children);
}
export default Component22049;
