import React from 'react';
const LABEL_2415 = 'component_2415';
export function Component2415({ value = 2415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2415, 'data-value': derived.doubled }, children);
}
export default Component2415;
