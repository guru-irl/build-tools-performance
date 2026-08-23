import React from 'react';
const LABEL_1261 = 'component_1261';
export function Component1261({ value = 1261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1261, 'data-value': derived.doubled }, children);
}
export default Component1261;
