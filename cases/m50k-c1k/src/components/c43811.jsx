import React from 'react';
const LABEL_43811 = 'component_43811';
export function Component43811({ value = 43811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43811, 'data-value': derived.doubled }, children);
}
export default Component43811;
