import React from 'react';
const LABEL_3983 = 'component_3983';
export function Component3983({ value = 3983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3983, 'data-value': derived.doubled }, children);
}
export default Component3983;
