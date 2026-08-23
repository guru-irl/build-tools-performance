import React from 'react';
const LABEL_44423 = 'component_44423';
export function Component44423({ value = 44423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44423, 'data-value': derived.doubled }, children);
}
export default Component44423;
