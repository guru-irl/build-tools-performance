import React from 'react';
const LABEL_10983 = 'component_10983';
export function Component10983({ value = 10983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10983, 'data-value': derived.doubled }, children);
}
export default Component10983;
