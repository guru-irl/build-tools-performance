import React from 'react';
const LABEL_40983 = 'component_40983';
export function Component40983({ value = 40983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40983, 'data-value': derived.doubled }, children);
}
export default Component40983;
