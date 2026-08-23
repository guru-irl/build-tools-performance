import React from 'react';
const LABEL_4391 = 'component_4391';
export function Component4391({ value = 4391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4391, 'data-value': derived.doubled }, children);
}
export default Component4391;
