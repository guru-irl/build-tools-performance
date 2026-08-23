import React from 'react';
const LABEL_37777 = 'component_37777';
export function Component37777({ value = 37777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37777, 'data-value': derived.doubled }, children);
}
export default Component37777;
