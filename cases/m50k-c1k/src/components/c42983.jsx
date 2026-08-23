import React from 'react';
const LABEL_42983 = 'component_42983';
export function Component42983({ value = 42983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42983, 'data-value': derived.doubled }, children);
}
export default Component42983;
