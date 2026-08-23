import React from 'react';
const LABEL_2126 = 'component_2126';
export function Component2126({ value = 2126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2126, 'data-value': derived.doubled }, children);
}
export default Component2126;
