import React from 'react';
const LABEL_16983 = 'component_16983';
export function Component16983({ value = 16983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16983, 'data-value': derived.doubled }, children);
}
export default Component16983;
