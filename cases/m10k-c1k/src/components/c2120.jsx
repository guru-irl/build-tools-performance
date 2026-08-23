import React from 'react';
const LABEL_2120 = 'component_2120';
export function Component2120({ value = 2120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2120, 'data-value': derived.doubled }, children);
}
export default Component2120;
