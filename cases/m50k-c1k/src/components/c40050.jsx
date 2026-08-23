import React from 'react';
const LABEL_40050 = 'component_40050';
export function Component40050({ value = 40050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40050, 'data-value': derived.doubled }, children);
}
export default Component40050;
