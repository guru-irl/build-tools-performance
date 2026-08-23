import React from 'react';
const LABEL_1983 = 'component_1983';
export function Component1983({ value = 1983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1983, 'data-value': derived.doubled }, children);
}
export default Component1983;
