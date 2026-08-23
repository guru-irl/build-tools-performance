import React from 'react';
const LABEL_2078 = 'component_2078';
export function Component2078({ value = 2078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2078, 'data-value': derived.doubled }, children);
}
export default Component2078;
