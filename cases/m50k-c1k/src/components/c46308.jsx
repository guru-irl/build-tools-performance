import React from 'react';
const LABEL_46308 = 'component_46308';
export function Component46308({ value = 46308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46308, 'data-value': derived.doubled }, children);
}
export default Component46308;
