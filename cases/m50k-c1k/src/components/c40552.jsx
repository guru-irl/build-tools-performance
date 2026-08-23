import React from 'react';
const LABEL_40552 = 'component_40552';
export function Component40552({ value = 40552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40552, 'data-value': derived.doubled }, children);
}
export default Component40552;
