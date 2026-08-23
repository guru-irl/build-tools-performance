import React from 'react';
const LABEL_4858 = 'component_4858';
export function Component4858({ value = 4858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4858, 'data-value': derived.doubled }, children);
}
export default Component4858;
