import React from 'react';
const LABEL_2868 = 'component_2868';
export function Component2868({ value = 2868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2868, 'data-value': derived.doubled }, children);
}
export default Component2868;
