import React from 'react';
const LABEL_2217 = 'component_2217';
export function Component2217({ value = 2217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2217, 'data-value': derived.doubled }, children);
}
export default Component2217;
