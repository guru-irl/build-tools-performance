import React from 'react';
const LABEL_25983 = 'component_25983';
export function Component25983({ value = 25983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25983, 'data-value': derived.doubled }, children);
}
export default Component25983;
