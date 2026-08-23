import React from 'react';
const LABEL_11983 = 'component_11983';
export function Component11983({ value = 11983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11983, 'data-value': derived.doubled }, children);
}
export default Component11983;
