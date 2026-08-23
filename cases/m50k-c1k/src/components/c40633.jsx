import React from 'react';
const LABEL_40633 = 'component_40633';
export function Component40633({ value = 40633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40633, 'data-value': derived.doubled }, children);
}
export default Component40633;
