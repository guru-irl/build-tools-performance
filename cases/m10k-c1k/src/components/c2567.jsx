import React from 'react';
const LABEL_2567 = 'component_2567';
export function Component2567({ value = 2567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2567, 'data-value': derived.doubled }, children);
}
export default Component2567;
