import React from 'react';
const LABEL_36545 = 'component_36545';
export function Component36545({ value = 36545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36545, 'data-value': derived.doubled }, children);
}
export default Component36545;
