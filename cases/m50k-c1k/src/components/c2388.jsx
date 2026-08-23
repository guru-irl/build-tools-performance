import React from 'react';
const LABEL_2388 = 'component_2388';
export function Component2388({ value = 2388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2388, 'data-value': derived.doubled }, children);
}
export default Component2388;
