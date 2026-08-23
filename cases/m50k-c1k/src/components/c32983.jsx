import React from 'react';
const LABEL_32983 = 'component_32983';
export function Component32983({ value = 32983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32983, 'data-value': derived.doubled }, children);
}
export default Component32983;
