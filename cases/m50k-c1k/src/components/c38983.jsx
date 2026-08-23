import React from 'react';
const LABEL_38983 = 'component_38983';
export function Component38983({ value = 38983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38983, 'data-value': derived.doubled }, children);
}
export default Component38983;
