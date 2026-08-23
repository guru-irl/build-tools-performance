import React from 'react';
const LABEL_2506 = 'component_2506';
export function Component2506({ value = 2506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2506, 'data-value': derived.doubled }, children);
}
export default Component2506;
