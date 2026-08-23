import React from 'react';
const LABEL_10078 = 'component_10078';
export function Component10078({ value = 10078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10078, 'data-value': derived.doubled }, children);
}
export default Component10078;
