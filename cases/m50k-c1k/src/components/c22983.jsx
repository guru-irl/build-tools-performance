import React from 'react';
const LABEL_22983 = 'component_22983';
export function Component22983({ value = 22983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22983, 'data-value': derived.doubled }, children);
}
export default Component22983;
