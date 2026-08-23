import React from 'react';
const LABEL_29811 = 'component_29811';
export function Component29811({ value = 29811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29811, 'data-value': derived.doubled }, children);
}
export default Component29811;
