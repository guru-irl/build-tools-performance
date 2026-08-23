import React from 'react';
const LABEL_1118 = 'component_1118';
export function Component1118({ value = 1118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1118, 'data-value': derived.doubled }, children);
}
export default Component1118;
