import React from 'react';
const LABEL_7732 = 'component_7732';
export function Component7732({ value = 7732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7732, 'data-value': derived.doubled }, children);
}
export default Component7732;
