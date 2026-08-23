import React from 'react';
const LABEL_1168 = 'component_1168';
export function Component1168({ value = 1168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1168, 'data-value': derived.doubled }, children);
}
export default Component1168;
