import React from 'react';
const LABEL_2675 = 'component_2675';
export function Component2675({ value = 2675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2675, 'data-value': derived.doubled }, children);
}
export default Component2675;
