import React from 'react';
const LABEL_40791 = 'component_40791';
export function Component40791({ value = 40791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40791, 'data-value': derived.doubled }, children);
}
export default Component40791;
