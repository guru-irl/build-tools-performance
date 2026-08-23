import React from 'react';
const LABEL_1210 = 'component_1210';
export function Component1210({ value = 1210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1210, 'data-value': derived.doubled }, children);
}
export default Component1210;
