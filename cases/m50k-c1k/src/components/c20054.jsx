import React from 'react';
const LABEL_20054 = 'component_20054';
export function Component20054({ value = 20054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20054, 'data-value': derived.doubled }, children);
}
export default Component20054;
