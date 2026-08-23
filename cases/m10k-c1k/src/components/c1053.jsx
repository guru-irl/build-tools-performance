import React from 'react';
const LABEL_1053 = 'component_1053';
export function Component1053({ value = 1053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1053, 'data-value': derived.doubled }, children);
}
export default Component1053;
