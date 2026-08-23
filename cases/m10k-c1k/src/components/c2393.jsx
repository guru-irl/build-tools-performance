import React from 'react';
const LABEL_2393 = 'component_2393';
export function Component2393({ value = 2393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2393, 'data-value': derived.doubled }, children);
}
export default Component2393;
