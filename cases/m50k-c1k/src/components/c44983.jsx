import React from 'react';
const LABEL_44983 = 'component_44983';
export function Component44983({ value = 44983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44983, 'data-value': derived.doubled }, children);
}
export default Component44983;
