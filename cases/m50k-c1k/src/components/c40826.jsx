import React from 'react';
const LABEL_40826 = 'component_40826';
export function Component40826({ value = 40826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40826, 'data-value': derived.doubled }, children);
}
export default Component40826;
