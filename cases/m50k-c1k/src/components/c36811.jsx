import React from 'react';
const LABEL_36811 = 'component_36811';
export function Component36811({ value = 36811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36811, 'data-value': derived.doubled }, children);
}
export default Component36811;
