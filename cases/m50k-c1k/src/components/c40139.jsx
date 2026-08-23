import React from 'react';
const LABEL_40139 = 'component_40139';
export function Component40139({ value = 40139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40139, 'data-value': derived.doubled }, children);
}
export default Component40139;
