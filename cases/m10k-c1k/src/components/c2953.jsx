import React from 'react';
const LABEL_2953 = 'component_2953';
export function Component2953({ value = 2953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2953, 'data-value': derived.doubled }, children);
}
export default Component2953;
