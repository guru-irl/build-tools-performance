import React from 'react';
const LABEL_45983 = 'component_45983';
export function Component45983({ value = 45983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45983, 'data-value': derived.doubled }, children);
}
export default Component45983;
