import React from 'react';
const LABEL_2410 = 'component_2410';
export function Component2410({ value = 2410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2410, 'data-value': derived.doubled }, children);
}
export default Component2410;
