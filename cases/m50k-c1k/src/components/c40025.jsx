import React from 'react';
const LABEL_40025 = 'component_40025';
export function Component40025({ value = 40025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40025, 'data-value': derived.doubled }, children);
}
export default Component40025;
