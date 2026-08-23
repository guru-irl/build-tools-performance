import React from 'react';
const LABEL_2742 = 'component_2742';
export function Component2742({ value = 2742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2742, 'data-value': derived.doubled }, children);
}
export default Component2742;
