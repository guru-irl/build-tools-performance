import React from 'react';
const LABEL_40391 = 'component_40391';
export function Component40391({ value = 40391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40391, 'data-value': derived.doubled }, children);
}
export default Component40391;
