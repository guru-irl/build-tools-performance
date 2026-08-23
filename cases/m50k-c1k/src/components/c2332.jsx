import React from 'react';
const LABEL_2332 = 'component_2332';
export function Component2332({ value = 2332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2332, 'data-value': derived.doubled }, children);
}
export default Component2332;
