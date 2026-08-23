import React from 'react';
const LABEL_22478 = 'component_22478';
export function Component22478({ value = 22478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22478, 'data-value': derived.doubled }, children);
}
export default Component22478;
