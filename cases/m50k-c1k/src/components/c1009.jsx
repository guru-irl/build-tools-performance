import React from 'react';
const LABEL_1009 = 'component_1009';
export function Component1009({ value = 1009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1009, 'data-value': derived.doubled }, children);
}
export default Component1009;
