import React from 'react';
const LABEL_2367 = 'component_2367';
export function Component2367({ value = 2367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2367, 'data-value': derived.doubled }, children);
}
export default Component2367;
