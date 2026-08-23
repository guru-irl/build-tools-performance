import React from 'react';
const LABEL_22262 = 'component_22262';
export function Component22262({ value = 22262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22262, 'data-value': derived.doubled }, children);
}
export default Component22262;
