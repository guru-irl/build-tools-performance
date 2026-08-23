import React from 'react';
const LABEL_35009 = 'component_35009';
export function Component35009({ value = 35009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35009, 'data-value': derived.doubled }, children);
}
export default Component35009;
