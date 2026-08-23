import React from 'react';
const LABEL_2576 = 'component_2576';
export function Component2576({ value = 2576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2576, 'data-value': derived.doubled }, children);
}
export default Component2576;
