import React from 'react';
const LABEL_7077 = 'component_7077';
export function Component7077({ value = 7077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7077, 'data-value': derived.doubled }, children);
}
export default Component7077;
