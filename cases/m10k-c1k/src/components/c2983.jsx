import React from 'react';
const LABEL_2983 = 'component_2983';
export function Component2983({ value = 2983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2983, 'data-value': derived.doubled }, children);
}
export default Component2983;
