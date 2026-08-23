import React from 'react';
const LABEL_40757 = 'component_40757';
export function Component40757({ value = 40757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40757, 'data-value': derived.doubled }, children);
}
export default Component40757;
